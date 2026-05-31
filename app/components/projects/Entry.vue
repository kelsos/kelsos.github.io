<script lang="ts" setup>
import Avatar from '~/components/Avatar.vue';

const { url, img, name, tech } = defineProps<{
  url: string;
  img: string;
  name: string;
  tech?: string[];
}>();

defineSlots<{
  default: () => unknown;
  title: () => unknown;
}>();
</script>

<template>
  <li class="group flex gap-5 p-5 rounded-lg border border-line bg-surface transition-colors duration-200 hover:border-accent">
    <Avatar
      :img="img"
      :alt="`${name} logo`"
      class="shrink-0 mt-0.5"
    />

    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-base font-medium text-fg group-hover:text-accent transition-colors duration-200">
          <slot name="title" />
        </h3>
        <a
          :href="url"
          target="_blank"
          rel="noreferrer nofollow"
          class="text-muted hover:text-accent transition-colors duration-200 shrink-0"
        >
          <Icon
            name="heroicons:arrow-up-right"
            class="h-4 w-4"
          />
        </a>
      </div>

      <p class="mt-1 text-sm leading-relaxed text-body">
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
