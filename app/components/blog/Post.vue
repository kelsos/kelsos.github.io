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
  <article class="relative group py-8 border-b border-neutral-600 last:border-b-0">
    <NuxtLink
      :to="link"
      class="block"
    >
      <div class="flex items-baseline justify-between gap-4 mb-2">
        <h2 class="text-base font-medium text-neutral-200 group-hover:text-slate-400 transition-colors duration-200">
          {{ title }}
        </h2>
        <span class="text-xs text-neutral-500 tabular-nums shrink-0">
          <PostTime
            v-if="date"
            :date="date"
          />
        </span>
      </div>

      <p class="text-sm leading-relaxed text-neutral-400 mb-3">
        {{ description }}
      </p>

      <div class="flex items-center gap-3">
        <div
          v-if="tags && tags.length > 0"
          class="flex flex-wrap gap-1.5"
        >
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-xs text-neutral-500"
          >
            #{{ tag }}
          </span>
        </div>

        <span class="ml-auto text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors duration-200 flex items-center gap-1">
          Read more
          <Icon
            name="heroicons:arrow-right"
            class="w-3 h-3"
          />
        </span>
      </div>
    </NuxtLink>
  </article>
</template>
