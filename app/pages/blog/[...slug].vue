<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});

const route = useRoute();

const { data } = await useAsyncData(route.path, async () => {
  const post = await queryCollection('blog').path(route.path).first();
  return post || null;
});

// Redirect if post not found
if (!data.value) {
  await navigateTo('/blog');
}

const postDate = computed(() => data.value?.date);
const formattedDate = useDateFormat(postDate, 'DD MMMM YYYY');
</script>

<template>
  <main
    v-if="data"
    class="max-w-3xl mx-auto px-4 sm:px-6"
  >
    <nav class="mb-8">
      <button
        class="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        @click="navigateTo('/blog')"
      >
        <Icon
          name="heroicons:arrow-left"
          class="w-4 h-4"
        />
        Back to posts
      </button>
    </nav>

    <header class="mb-12">
      <p class="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">
        {{ formattedDate }}
      </p>
      <h1 class="text-3xl md:text-4xl font-light tracking-tight text-neutral-100">
        {{ data.title }}
      </h1>
    </header>

    <article class="prose-editorial [&_p]:py-2 [&_p]:text-neutral-300 [&_p]:text-base [&_p]:leading-relaxed [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-neutral-200 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-neutral-200 [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:text-neutral-300 [&_ol]:text-neutral-300 [&_li]:text-neutral-300 [&_blockquote]:border-l-2 [&_blockquote]:border-neutral-600 [&_blockquote]:pl-4 [&_blockquote]:text-neutral-400 [&_blockquote]:italic [&_code]:text-neutral-300 [&_pre]:bg-neutral-700 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-neutral-600 [&_img]:rounded-lg [&_img]:border [&_img]:border-neutral-600 [&_hr]:border-neutral-600">
      <ContentRenderer :value="data" />
    </article>
  </main>
</template>
