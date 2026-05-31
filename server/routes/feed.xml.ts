// Pre-rendered RSS feed. Listed in nitro.prerender.routes so `nuxt generate`
// writes it as a static /feed.xml, and advertised via a <link> in app.head.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default defineEventHandler(async (event) => {
  const site = getSiteConfig(event);
  const base = (site.url || 'https://kelsos.net').replace(/\/$/, '');
  const posts = await queryCollection(event, 'blog').order('date', 'DESC').all();

  const items = posts
    .map((post) => {
      const url = `${base}${post.path}`;
      const summary = post.description?.replace(/\s+/g, ' ').trim();
      const description = summary
        ? `\n      <description>${escapeXml(summary)}</description>`
        : '';
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>${description}
    </item>`;
    })
    .join('\n');

  const lastBuildDate = posts.length > 0
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name || 'Konstantinos Paparas')}</title>
    <link>${base}</link>
    <description>${escapeXml(site.description || '')}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  setHeader(event, 'content-type', 'application/rss+xml; charset=utf-8');
  return feed;
});
