<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all());
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-light tracking-tight text-neutral-100">
        Latest Posts
      </h1>
      <p class="mt-4 text-base leading-relaxed text-neutral-400">
        Here you can find a list of the latest news, updates and articles.
      </p>
    </div>

    <div class="space-y-0">
      <template
        v-for="entry in data"
        :key="entry._id"
      >
        <BlogPost
          :title="entry.title"
          :date="entry.date.toLocaleString()"
          :description="entry.description"
          :tags="entry.tags"
          :link="entry.path"
        />
      </template>
    </div>
  </div>
</template>
