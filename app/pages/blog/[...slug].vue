<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});

const route = useRoute();
const { public: { bluesky } } = useRuntimeConfig();

// Normalize trailing slashes so /blog/foo and /blog/foo/ resolve to the same
// post (static hosts often serve the trailing-slash form).
const normalizedPath = route.path.replace(/\/+$/, '') || '/';

const { data } = await useAsyncData(normalizedPath, async () => {
  const posts = await queryCollection('blog').order('date', 'DESC').all();
  const index = posts.findIndex(p => p.path.replace(/\/+$/, '') === normalizedPath);

  if (index === -1)
    return null;

  return {
    post: posts[index],
    // Newest first, so a lower index is the more recent post.
    newer: index > 0 ? posts[index - 1] : null,
    older: index < posts.length - 1 ? posts[index + 1] : null,
  };
});

// A genuinely missing post should 404, not silently redirect to the listing.
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true });
}

const post = computed(() => data.value?.post);
const newer = computed(() => data.value?.newer);
const older = computed(() => data.value?.older);

const postDate = computed(() => post.value?.date);
const formattedDate = useDateFormat(postDate, 'DD MMMM YYYY');

const author = 'Konstantinos Paparas';
const blueskyHandle = computed(() => `@${bluesky.split('/').pop()}`);

// Content excerpts can contain hard line breaks; collapse whitespace for meta.
const cleanDescription = computed(() => post.value?.description?.replace(/\s+/g, ' ').trim());
const publishedTime = computed(() => (post.value?.date ? new Date(post.value.date).toISOString() : undefined));

useSeoMeta({
  title: () => post.value?.title,
  description: () => cleanDescription.value,
  ogTitle: () => post.value?.title,
  ogDescription: () => cleanDescription.value,
  ogType: 'article',
  articlePublishedTime: () => publishedTime.value,
  articleAuthor: [author],
});

useSchemaOrg([
  defineArticle({
    headline: () => post.value?.title,
    description: () => cleanDescription.value,
    datePublished: () => publishedTime.value,
    image: '/img/author.jpg',
    // author/publisher auto-link to the site-wide Person identity (nuxt.config schemaOrg)
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: () => post.value?.title, item: () => route.path },
    ],
  }),
]);

// OG image props are baked at prerender (not reactive), so reading .value here is intentional.
// eslint-disable-next-line vue/no-ref-object-reactivity-loss -- prerender-time read
defineOgImage('Site', { title: post.value?.title, description: cleanDescription.value });
</script>

<template>
  <main
    v-if="post"
    class="max-w-3xl mx-auto px-6"
  >
    <nav class="mb-8">
      <NuxtLink
        to="/blog"
        class="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors duration-200"
      >
        <Icon
          name="heroicons:arrow-left"
          class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        />
        Back to posts
      </NuxtLink>
    </nav>

    <header class="mb-12 border-b border-line pb-8">
      <p class="text-xs font-medium uppercase tracking-widest text-accent mb-4">
        {{ formattedDate }}
      </p>
      <h1 class="font-display text-4xl md:text-5xl font-medium tracking-tight text-fg">
        {{ post.title }}
      </h1>

      <div class="mt-8 flex items-center gap-3">
        <NuxtImg
          class="w-11 h-11 rounded-full object-cover ring-1 ring-line shrink-0"
          src="/img/author.jpg"
          :alt="author"
          width="44"
          height="44"
        />
        <div class="text-sm leading-tight">
          <p class="font-medium text-fg">
            {{ author }}
          </p>
          <a
            :href="bluesky"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted hover:text-accent transition-colors duration-200"
          >
            {{ blueskyHandle }}
          </a>
        </div>
      </div>

      <div
        v-if="post.tags && post.tags.length > 0"
        class="mt-6 flex flex-wrap gap-1.5"
      >
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs text-muted"
        >
          #{{ tag }}
        </span>
      </div>
    </header>

    <article class="prose-editorial [&_p]:py-2 [&_p]:text-body [&_p]:text-base [&_p]:leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-fg [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-fg [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:text-body [&_ol]:text-body [&_li]:text-body [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:text-muted [&_blockquote]:italic [&_code]:text-fg [&_pre]:bg-surface-2 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-line [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:leading-relaxed [&_img]:rounded-lg [&_img]:border [&_img]:border-line [&_hr]:border-line">
      <ContentRenderer :value="post" />
    </article>

    <nav
      v-if="older || newer"
      aria-label="Post navigation"
      class="mt-16 grid grid-cols-2 gap-4 border-t border-line pt-8"
    >
      <NuxtLink
        v-if="older"
        :to="older.path"
        class="group col-start-1 flex flex-col gap-1"
      >
        <span class="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          <Icon
            name="heroicons:arrow-left"
            class="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Older
        </span>
        <span class="font-display text-base font-medium text-fg group-hover:text-accent transition-colors duration-200">
          {{ older.title }}
        </span>
      </NuxtLink>

      <NuxtLink
        v-if="newer"
        :to="newer.path"
        class="group col-start-2 flex flex-col items-end gap-1 text-right"
      >
        <span class="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          Newer
          <Icon
            name="heroicons:arrow-right"
            class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
        <span class="font-display text-base font-medium text-fg group-hover:text-accent transition-colors duration-200">
          {{ newer.title }}
        </span>
      </NuxtLink>
    </nav>
  </main>
</template>
