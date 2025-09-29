<script lang="ts" setup>
import Avatar from '~/components/Avatar.vue';

const { url, img, tech } = defineProps<{
  url: string;
  img: string;
  tech?: string[];
}>();

const label = computed(() => url.split('://')[1]);
</script>

<template>
  <li class="group relative p-6 transition-all duration-300 hover:-translate-y-1">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-zinc-800/50 rounded-2xl opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
    />
    <div class="relative z-10">
      <Avatar
        :img="img"
        class="mb-4"
      />

      <h3 class="text-xl font-bold mb-2 text-gray-200 group-hover:text-orange-500 transition-colors">
        <slot name="title" />
      </h3>

      <p class="text-sm text-gray-400 mb-4">
        <slot />
      </p>

      <div
        v-if="tech && tech.length > 0"
        class="flex flex-wrap gap-2 mb-4"
      >
        <TechBadge
          v-for="techItem in tech"
          :key="techItem"
          :tech="techItem"
        />
      </div>

      <a
        :href="url"
        target="_blank"
        rel="noreferrer nofollow"
        class="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
      >
        <Icon
          name="heroicons:link"
          class="h-4 w-4 flex-none"
        />
        <span class="ml-2">{{ label }}</span>
      </a>
    </div>
  </li>
</template>
