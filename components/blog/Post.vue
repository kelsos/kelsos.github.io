<script setup lang="ts">
import PostTime from '~/components/blog/PostTime.vue';

defineProps<{
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
}>();
</script>

<template>
  <article class="relative group">
    <div
      class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
    />
    <div class="relative">
      <TextTitle>{{ title }}</TextTitle>
      <dl
        class="left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
      >
        <dt class="sr-only">
          Date
        </dt>
        <dd class="whitespace-nowrap text-xs leading-6 dark:text-zinc-300">
          <PostTime
            v-if="date"
            :date="date"
          />
        </dd>
      </dl>
      <TextDescription>{{ description }}</TextDescription>
    </div>
    <div class="my-1">
      <template
        v-for="tag in tags"
        :key="tag"
      >
        <UBadge :label="tag" />
      </template>
    </div>
    <a
      class="flex items-center text-sm text-primary-500 font-medium"
      :href="link"
    >
      <span
        class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
      />
      <span class="relative">
        Read more
        <span class="sr-only">, {{ title }} </span>
      </span>
      <UIcon
        name="i-heroicons-chevron-right"
        class="relative mt-px overflow-visible ml-2.5 text-primary-300 dark:text-primary-700"
      />
    </a>
  </article>
</template>
