<script lang="ts" setup>
import Avatar from '~/components/Avatar.vue';

const { url, img, tech } = defineProps<{
  url: string;
  img: string;
  tech?: string[];
}>();
</script>

<template>
  <li class="group flex gap-5 p-5 rounded-lg border border-neutral-600 bg-neutral-700 transition-colors duration-200 hover:border-neutral-500">
    <Avatar
      :img="img"
      class="shrink-0 mt-0.5"
    />

    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-base font-medium text-neutral-200 group-hover:text-slate-400 transition-colors duration-200">
          <slot name="title" />
        </h3>
        <a
          :href="url"
          target="_blank"
          rel="noreferrer nofollow"
          class="text-neutral-500 hover:text-slate-400 transition-colors duration-200 shrink-0"
        >
          <Icon
            name="heroicons:arrow-up-right"
            class="h-4 w-4"
          />
        </a>
      </div>

      <p class="mt-1 text-sm leading-relaxed text-neutral-400">
        <slot />
      </p>

      <div
        v-if="tech && tech.length > 0"
        class="flex flex-wrap gap-2 mt-3"
      >
        <TechBadge
          v-for="techItem in tech"
          :key="techItem"
          :tech="techItem"
        />
      </div>
    </div>
  </li>
</template>
