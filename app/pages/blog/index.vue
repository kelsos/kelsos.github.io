<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});

useSeoMeta({
  title: 'Blog',
  description: 'News, updates and the occasional article by Konstantinos Paparas.',
  ogTitle: 'Blog',
  ogDescription: 'News, updates and the occasional article by Konstantinos Paparas.',
});

defineOgImageComponent('Site', {
  title: 'Blog',
  description: 'News, updates and the occasional article by Konstantinos Paparas.',
});
</script>

<template>
  <BlogPosts />
</template>
