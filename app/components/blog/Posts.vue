<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all());
</script>

<template>
  <div class="max-w-3xl mx-auto px-6">
    <div class="mb-12">
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-accent" />
        <span class="text-xs font-medium uppercase tracking-widest text-muted">
          Writing
        </span>
      </div>
      <h1 class="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight text-fg">
        Latest Posts
      </h1>
      <p class="mt-4 text-base leading-relaxed text-body">
        News, updates and the occasional article.
      </p>
    </div>

    <div class="space-y-0">
      <template
        v-for="entry in data"
        :key="entry.path"
      >
        <BlogPost
          :title="entry.title"
          :date="entry.date"
          :description="entry.description"
          :tags="entry.tags"
          :link="entry.path"
        />
      </template>
    </div>
  </div>
</template>
