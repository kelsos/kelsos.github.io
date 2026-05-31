---
title: 'Building a Blog with Nuxt, Nuxt SEO, GitHub Pages, and Obsidian'
category: guide
tags: [ 'nuxt', 'seo', 'github-pages', 'obsidian', 'static-site' ]
date: 2026-05-31
---

Over the years I have used various combinations to host and deploy a personal website.
From good old Geocities to LAMP deploying via FTP to GitHub Pages and Jekyll.

At some point GitHub made it possible to use GitHub Actions and artifact upload to deploy websites. This opened the way to the current stack.

After working for a few years with [Nuxt](https://nuxt.com) and [Vue](https://vuejs.org) it seemed like a good idea to move the portfolio site to use technologies I am more familiar with instead of maintaining an outdated Jekyll website.

The benefits of such an approach are simple, you need no server, no database, no CMS.
It's Vue and CSS for the templates and Markdown files in a git repository as the content (posts) that get converted to static HTML by [@nuxt/content](https://content.nuxt.com).

For the SEO you can use [@nuxtjs/seo](https://nuxtseo.com). The content is written in plain Markdown and hosted for free on GitHub Pages, and the editing of the posts can be done entirely from [Obsidian](https://obsidian.md).

This is in fact the exact stack that powers the site you are reading right now.
Here is how the pieces fit together.

## Why this combination

There are a lot of "build your own blog" guides. Some reach for a hosted CMS or a heavyweight platform, others for a different kind of lightweight static solution. This is not the only, or the right, approach.

For me, I wanted something that was free to host, fast to load, owned entirely by me, and built with the tools I am comfortable with and use every day.

The four ingredients:

- **Nuxt** - generates the whole site as static HTML, so it can live anywhere, including free static hosts. It also handles the portfolio and landing page.
- **Nuxt SEO** - handles the parts I never want to do by hand: sitemaps, robots, Open Graph images, and structured data, with almost no configuration.
- **GitHub Pages** - hosts the output for free and rebuilds on every push.
- **Obsidian** - turns the `content/` folder into a comfortable place to write.

## Project setup

Start from a fresh Nuxt project and add the content and SEO modules:

```bash
pnpm create nuxt@latest my-blog
cd my-blog
pnpm add @nuxt/content @nuxtjs/seo
```

`@nuxtjs/seo` is a meta-module, it pulls in sitemap, robots, OG image, schema.org, and link-checker modules together, so you only register one thing.

This takes care of the markdown to html part along with the blog's SEO after deploying it.

## Configuring Nuxt

The whole site is driven by `nuxt.config.ts`. The important bits are the module list, your site
identity, and the static-generation settings:

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/seo',
  ],

  // Pre-render the homepage and crawl every link from there
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // Generate Open Graph images at build time — no runtime needed
  ogImage: {
    enabled: true,
    zeroRuntime: true,
  },

  // Structured data describing who the site is about
  schemaOrg: {
    identity: {
      jobTitle: 'Some Occupation',
      name: 'Your Name',
      type: 'Person',
    },
  },

  // Used by every SEO module: canonical URLs, sitemap, OG tags
  site: {
    defaultLocale: 'en',
    description: 'Short description used as the default meta description.',
    name: 'Your Name',
    url: 'https://your-domain.com',
  },
});
```

Get `site.url` right before anything else. Every canonical link, sitemap entry, and OG tag is built from it. Set it once and the modules do the rest.

The `zeroRuntime` OG image option renders each social-share image to a PNG at build time using [satori](https://github.com/vercel/satori) and [resvg](https://github.com/yisibl/resvg-js), so there is no serverless function involved. That matters on GitHub Pages, where there is no server to run.

## The landing page

The blog is only one part of the site. The home page and portfolio are plain [Nuxt](https://nuxt.com) pages styled with [Tailwind](https://tailwindcss.com) (added through its [Nuxt setup guide](https://tailwindcss.com/docs/installation/framework-guides/nuxt)). There is nothing blog-specific about them; they are regular pages that link to `/blog`, which also lets the prerenderer crawl to the listing. I am keeping the visual design out of scope here. Using Nuxt with tailwind you can do whatever you like.

## Writing content as Markdown

`@nuxt/content` (v3) uses typed collections. Define the shape of a blog post once in
`content.config.ts` and you get validation and type safety for free:

```ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      schema: z.object({
        category: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        title: z.string(),
      }),
      source: 'blog/*.md',
      type: 'page',
    }),
  },
});
```

Posts then live as Markdown files under `content/blog/`, each with frontmatter matching that schema:

```markdown
---
title: 'My First Post'
category: news
tags: [ 'announcement' ]
date: 2026-05-31
---

The body of the post goes here, in plain Markdown.
```

The filename becomes the URL slug, so for example `content/blog/my-first-post.md` is served at `/blog/my-first-post`.

## Rendering posts

Both files go under the app's `pages/` directory, and [Nuxt's file-based routing](https://nuxt.com/docs/guide/directory-structure/pages) turns `pages/blog/index.vue` into `/blog` and the catch-all `pages/blog/[...slug].vue` into `/blog/<slug>` on its own. Everything else, the `app.vue` entry, the dev server, and the build, comes from the `create nuxt` scaffold, so this is the only part you actually write.

Two pages do most of the work. The listing page (`pages/blog/index.vue`) queries every post, newest first, and renders a link for each:

```vue
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all());
</script>

<template>
  <div>
    <h1>Latest posts</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.path"
      >
        <NuxtLink :to="post.path">
          {{ post.title }}
        </NuxtLink>
        <time :datetime="String(post.date)">{{ post.date }}</time>
      </li>
    </ul>
  </div>
</template>
```

The individual post lives at a catch-all route (`pages/blog/[...slug].vue`). It fetches the one post that matches the current path, renders its body, and wires up the SEO:

```vue
<script setup lang="ts">
const route = useRoute();

// Trim a trailing slash before matching. Static hosts often serve /blog/foo/
// while the stored path has none, so without this a valid post resolves to
// nothing and you get bounced to a 404.
const path = route.path.replace(/\/+$/, '') || '/';

const { data: post } = await useAsyncData(path, () =>
  queryCollection('blog').path(path).first());

// A genuinely missing post should 404, not render an empty page.
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true });
}

useSeoMeta({
  title: () => post.value?.title,
  ogType: 'article',
});

defineArticle({
  headline: () => post.value?.title,
  datePublished: () => post.value?.date,
});

defineOgImage('Site', { title: post.value?.title });
</script>

<template>
  <article v-if="post">
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>
```

`<ContentRenderer>` takes the parsed post and renders the Markdown body to HTML. The SEO helpers (`useSeoMeta`, `defineArticle`, `defineOgImage`) come from Nuxt SEO and bake the per-post title, article schema, and social image in at prerender time.

## Highlighting code

Since this is a developer blog, the code blocks matter. Nuxt Content runs [Shiki](https://shiki.style) under the hood, and you configure it in `nuxt.config.ts` under `content.build.markdown.highlight`:

```ts
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        highlight: {
          preload: ['ts', 'vue', 'bash', 'yaml', 'json', 'diff'],
          theme: {
            dark: 'catppuccin-frappe',
            default: 'catppuccin-latte',
          },
        },
      },
    },
  },
});
```

Two things are worth getting right here. The `theme` object uses `default` for light mode and `dark` for dark mode, and Nuxt Content wires the `dark` theme to the `.dark` class on `<html>`, so highlighting follows the site's theme switch on its own. Make sure `default` points at a theme that is actually light. If you give it a dark theme, the tokens come out light-on-light and you cannot read them (I learned that one the slow way).

The `preload` list pins the language grammars that get bundled. List the languages you actually write in posts, otherwise a block in a language Shiki has not loaded can come out as plain text instead of highlighted.

## Social share images

Earlier, `defineOgImage('Site', …)` turned up without much explanation. `Site` is a component you write yourself, and it is the template for the preview image that shows up when a link is shared on social media.

With `ogImage.zeroRuntime` turned on, Nuxt SEO renders these at build time. It takes a Vue component, runs it through [Satori](https://github.com/vercel/satori) to get an SVG, then rasterises that to a PNG with [resvg](https://github.com/yisibl/resvg-js), so there is no server or headless browser involved. The component lives at `app/components/OgImage/Site.satori.vue` (the `.satori` suffix tells the module how to render it):

```vue
<script setup lang="ts">
const { title, description } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between bg-neutral-800 p-16">
    <span class="text-3xl font-bold text-white">Your Name</span>
    <h1 class="text-6xl font-light text-white">
      {{ title || 'A default title' }}
    </h1>
    <p class="text-2xl text-neutral-400">
      {{ description }}
    </p>
  </div>
</template>
```

It is a normal component with `title` and `description` props. Any page then calls it with the values it wants:

```ts
defineOgImage('Site', {
  description: post.value.description,
  title: post.value.title,
});
```

Each post ends up with its own image, baked at prerender time with its title rendered in. The one constraint to keep in mind is that Satori only understands a subset of CSS, so stick to flexbox, plain text, and solid colors rather than the full Tailwind surface.

## Editing with Obsidian

This is the part I actually enjoy day to day. Obsidian is just a Markdown editor that operates on a folder of `.md` files, which is what `content/` already is.

To use Obsidian with your posts, do the following:

**Open the project as a vault:**

1. In Obsidian, choose **Open folder as vault**.
2. Point it at your repo root. (You can also open just `content/`, but the repo root is what lets the image workflow below work, so I open the whole project.)

That's it, now every post becomes a note. This means that you get live preview, a file tree, backlinks, tag search, and quick switching, all the things a plain text editor lacks, while writing in the same Markdown that Nuxt Content consumes. There is no export step, no need to copy-paste, which makes the flow extremely smooth.

A few extra tips that will smooth out the workflow:

- **Frontmatter:** Obsidian understands YAML frontmatter natively and shows it in its Properties panel, so `title`, `tags`, and `date` are editable as form fields instead of raw text.
- **Templates:** You can use Obsidian's core Templates plugin to stamp out a new post with the correct frontmatter every time, no more forgetting a required field.
- **Links:** Prefer standard Markdown links (`[text](/blog/other-post)`) over Obsidian's `[[wikilinks]]` for anything that needs to work on the published site, since Nuxt renders standard Markdown.

One housekeeping note: the first time you open the vault, Obsidian will write a hidden `.obsidian/` folder of editor settings into it. Add the `.obsidian` directory to your `.gitignore` so that per-machine config never lands in the repository.

When a draft is ready, you only need to commit and push, that's the only "publish" button you need.

## Previewing locally and managing drafts

Obsidian's reading view shows you the Markdown, but not your actual site, the theme, layout, OG image, or how a code block is highlighted. For that, you will need to run the dev server:

```bash
pnpm run dev
```

This serves the site at `http://localhost:3000` with hot reload, so saving a file in Obsidian will update the browser instantly. This is the fastest way to see a post exactly as it will publish, and it surfaces any possible schema validation errors (e.g. a missing or mistyped frontmatter field) before you ever push.

So how do you keep a half-finished post out of the build while you work on it?

The simplest answer is to not commit it until it's done. If you don't mind incomplete content sitting in the repo, though, add an optional `draft` flag to the collection schema in `content.config.ts`:

```ts
const schema = z.object({
  category: z.string(),
  date: z.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()),
  title: z.string(),
});
```

Then you need to filter drafts out wherever you list posts, and crucially, out of the RSS feed too:

```ts
const posts = await queryCollection('blog')
  .where('draft', '<>', true)
  .order('date', 'DESC')
  .all();
```

Because the condition only excludes posts where `draft` is explicitly `true`, existing posts without the field are unaffected. While writing, set `draft: true` and the post will be visible on `pnpm dev` (where you want to preview it) but skipped by the generated site. Delete the flag, or set it to `false`, when you are ready, then commit.

## Handling images

Images need slightly more care than text, because Obsidian and the built site resolve paths a bit differently. Anything in Nuxt's `public/` directory is served from the site root, so an image at `public/img/posts/post.jpg` is referenced in Markdown as `/img/posts/post.jpg` (the `public/` prefix is dropped). I keep post images in `public/img/posts` and point Obsidian's **default attachment location** there (Settings → Files and links → "In the folder specified below"), so pasted screenshots land where the site expects them.

There is one catch with that: Obsidian's attachment folder has to live inside the vault, and `public/` is at the repo root, not under `content/`. So open the vault at the **repo root** rather than at `content/`. The posts still sit in `content/blog` as a subfolder, and `public/img/posts` is now reachable as the attachment path. The setting is per-vault, stored in `.obsidian/app.json` as `attachmentFolderPath`; since `.obsidian/` is git-ignored it stays local to your machine, so a fresh clone elsewhere will need it set again.

One mismatch to watch for: Obsidian's default paste syntax is its own embed format, `![[post.jpg]]`, which Nuxt does **not** understand. You need to use a standard Markdown image instead:

```markdown
![Description of the image](/img/posts/post.jpg)
```

Note that Obsidian writes the link as a vault path (`public/img/posts/post.jpg`); drop the `public/` prefix so it matches the served URL.

You can switch Obsidian to use Markdown-style links globally under Settings → Files and links → **Use \[\[Wikilinks]]** (turn it off). With that flipped, pasted images produce the right syntax automatically.

For better performance, you can render images through `@nuxt/image` rather than a plain `<img>`. Since `@nuxt/content` turns Markdown `![]()` into a configurable component, you map it to `<NuxtImg>` once and carry on writing plain Markdown. You get automatic resizing, lazy loading, and modern formats (WebP/AVIF) at build time, and nothing changes about how you write a post.

## Deploying to GitHub Pages

GitHub Pages can now build the site using GitHub Actions and then deploy the result. The key is that GitHub Pages serves static files, so you run `nuxt generate` (which produces `.output/public/`) rather than using `nuxt build`.

Here is a minimal `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm run generate
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .output/public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

In your repository settings, you need to set **Pages → Build and deployment → Source** to **GitHub Actions**, and every push to `main` will regenerate and redeploy the site. The OIDC token (`id-token: write`) means no secrets or personal access tokens are needed.

One thing to watch with static generation: `nuxt generate` discovers pages by crawling links out from `/`, so a post only gets built if something links to it. The `/blog` listing links to every post, so the chain holds. But a page that is reachable only by typing its URL will not be generated, and it will 404 in production even though it works fine in `pnpm dev`. When that happens, add the path to the `routes` array explicitly, the same way `/feed.xml` is in the RSS section.

## Using a custom domain

GitHub Pages serves your site at `username.github.io` by default, but pointing your own domain at it is free and takes two steps.

First, tell GitHub which domain to serve by adding a `CNAME` file to `public/`. Anything in `public/` is copied verbatim into the build output, so the file survives every deploy:

```
your-domain.com
```

Second, you need to configure DNS at your registrar. For an apex domain (`your-domain.com`) add `A`/`AAAA` records pointing at GitHub's IPs; for a subdomain (`www.your-domain.com`) add a `CNAME` record pointing at `username.github.io`:

```
# Apex domain — A records
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153

# Subdomain — CNAME record
www CNAME username.github.io.
```

Once DNS propagates, enable **Enforce HTTPS** in the repository's Pages settings. GitHub provisions a free certificate automatically. Finally, make sure `site.url` in `nuxt.config.ts` matches the custom domain, since every canonical link, sitemap entry, and OG tag is derived from it.

You can find more details about configuring a custom domain with GitHub Pages [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Adding an RSS feed

A blog should have a feed so readers can subscribe. Because the site is fully static, I use a Nitro route that is pre-rendered to a plain `feed.xml` at build time.

To do so create `server/routes/feed.xml.ts`:

```ts
import { queryCollection } from '#content/server';

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog').order('date', 'DESC').all();

  const site = 'https://your-domain.com';
  const items = posts
    .map(post => `
      <item>
        <title>${post.title}</title>
        <link>${site}${post.path}</link>
        <guid>${site}${post.path}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`)
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Your Name</title>
        <link>${site}</link>
        <description>Latest posts</description>
        ${items}
      </channel>
    </rss>`;

  setHeader(event, 'content-type', 'application/xml');
  return feed;
});
```

Then add the route to your prerender list in `nuxt.config.ts` so it is generated as a static file:

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/feed.xml'],
    },
  },
});
```

Now `https://your-domain.com/feed.xml` is a real file in the deploy output. Advertise it in your site's `<head>` so feed readers and browsers can discover it automatically:

```ts
useHead({
  link: [
    {
      href: '/feed.xml',
      rel: 'alternate',
      title: 'Your Name',
      type: 'application/rss+xml',
    },
  ],
});
```

None of the modules already in this stack generate a feed. `@nuxtjs/seo` handles sitemaps, robots, and structured data, but RSS is out of its scope. For thirty lines of XML I would rather not add another dependency, and hand-rolling the route gives me full control over what each `<item>` contains.

## Adding comments

A static site has no backend, so comments need a third-party service. You can also just skip them. If you do want them, there are a few options, and which one fits depends on how much you care about simplicity, privacy, and ownership:

- **[Giscus](https://giscus.app)** stores comments as **GitHub Discussions** on your repo. Free, no
  ads, no tracking, and commenters sign in with GitHub, which suits a developer audience. For a GitHub-hosted blog it is the obvious choice.
- **[Utterances](https://utteranc.es)** is the same idea but backed by GitHub **Issues** instead. It is lighter than
  Giscus, though Discussions is the better fit for conversations. Utterances is widely used and stable but only lightly maintained these days, so Giscus is effectively its actively-developed successor.
- **No comments at all** is the option I have lived with for a long time. Static-site comment widgets tend to attract spam and also add third-party scripts; a lot of the time, pointing readers at a social thread (Bluesky, Mastodon) is enough.

I went with Giscus. After enabling Discussions on your repository and installing the [Giscus GitHub app](https://github.com/apps/giscus), you add a small client-only component on your post page:

```vue
<script setup lang="ts">
const container = useTemplateRef<HTMLElement>('container');

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  Object.assign(script.dataset, {
    repo: 'username/repo',
    repoId: 'YOUR_REPO_ID',
    category: 'Announcements',
    categoryId: 'YOUR_CATEGORY_ID',
    mapping: 'pathname',
    theme: 'preferred_color_scheme',
  });
  container.value?.append(script);
});
</script>

<template>
  <ClientOnly>
    <div ref="container" />
  </ClientOnly>
</template>
```

Wrapping it in `<ClientOnly>` keeps the third-party script out of the pre-rendered HTML, so it does not slow down the initial page load or get in the way of crawlers.

## What you configure on GitHub itself

Most of the setup lives in code, but a handful of settings only exist in the GitHub web UI. Miss one and the deploy quietly does nothing, so here is the checklist:

- **Repository name.** A repo named `username.github.io` is published at the apex
  `https://username.github.io`; any other name is served from a `/repo-name/` subpath. If you use a subpath, set `app.baseURL` in `nuxt.config.ts` to match, or links and assets will 404.
- **Pages source.** Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not the older "Deploy from a branch"). Without this, the `deploy-pages` step has nowhere to publish.
- **Workflow permissions.** The `permissions` block in `deploy.yml` (`pages: write`, `id-token: write`) grants what the deploy needs per-run. If your organisation locks workflow permissions down, also check **Settings → Actions → General → Workflow permissions** so the Actions runner is allowed those scopes.
- **Environment.** The first deploy creates a `github-pages` environment automatically. If you add branch protection or required reviewers to it under **Settings → Environments**, deploys will pause for approval, which is fine if intentional, surprising if not.
- **Custom domain.** Enter the domain under **Settings → Pages → Custom domain** (this writes the same `CNAME` value GitHub expects), then tick **Enforce HTTPS** once the certificate is provisioned. Keep the `CNAME` file in `public/` too, so a redeploy never wipes the setting.
- **Discussions (only for Giscus comments).** Enable **Settings → General → Features → Discussions**, then install the [Giscus app](https://github.com/apps/giscus) and grant it access to the repo. Giscus' own
  configurator reads back your `repoId` and `categoryId` from these once they exist.

A public repository is required for Pages on the free plan; private-repo Pages requires a paid plan.

## Going further

The setup above is enough to publish a blog. A few things I have either added or kept in mind for later, all of which stay within the static, no-backend approach:

- **Analytics** - you can use a privacy-friendly, cookieless option like [Plausible](https://plausible.io),
  [Umami](https://umami.is), or [GoatCounter](https://www.goatcounter.com) gives you visitor numbers without the weight (or the consent banner) of Google Analytics.
- **Client-side search** - Nuxt Content's own [`queryCollectionSearchSections`](https://content.nuxt.com/docs/advanced/fulltext-search) breaks your posts into searchable sections at build time, which you pair with a small library like [MiniSearch](https://lucaong.github.io/minisearch/) or [Fuse.js](https://www.fusejs.io) for the actual matching. For a larger site, [Pagefind](https://pagefind.app) is a good alternative that indexes the generated HTML into a lazy-loaded index instead of loading everything into memory. Either way the search stays fully static, with no server.
- **A custom 404 page** - you can add `app/error.vue` so broken links land on your own page instead of GitHub's default one.
- **Favicon and web manifest** - drop the icons in `public/` and wire them up with `useHead`, or let a module like `@vite-pwa/nuxt` generate them.
- **Redirects** - when migrating an existing blog, map old URLs to new ones with Nitro `routeRules` so you keep your search ranking and don't break inbound links.

None of these are needed to launch. Ship the blog first and add them when you actually want them.

## The full loop

So once it's all wired up, the day-to-day should look like this:

1. Open Obsidian, write a new post in `content/blog/`.
2. `git commit && git push`.
3. GitHub Actions runs `nuxt generate` and deploys the static output.
4. Nuxt SEO has already baked in the sitemap, robots rules, OG image, and structured data.

This way you get a free, fast, fully owned blog where the only thing you actually need to touch is Markdown.

The boring part is done. Go write something you actually care about, that is the fun bit.

Regards, Kelsos.
