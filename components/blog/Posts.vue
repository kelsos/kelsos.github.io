<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all());
</script>

<template>
  <div>
    <SectionHeader>
      <template #title>
        Latest Posts
      </template>
      <span>
        Here you can find a list of the latest news, updates and articles.
      </span>
    </SectionHeader>
    <div class="flex-col flex items-center px-4 h">
      <div class="space-y-16 max-w-xl">
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
  </div>
</template>
