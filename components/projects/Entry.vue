<script lang="ts" setup>
import { get } from '@vueuse/core';
import Avatar from '~/components/Avatar.vue';

const props = defineProps<{
  url: string;
  img: string;
}>();

const { url } = toRefs(props);

const label = computed(() => get(url).split('://')[1]);
</script>

<template>
  <li class="group relative flex flex-col items-start">
    <Avatar :img="img" />
    <TextTitle class="mt-6">
      <div
        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
      />
      <a
        :href="url"
        target="_blank"
        rel="noreferrer nofollow"
      >
        <span
          class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
        />
        <span class="relative z-10">
          <slot name="title" />
        </span>
      </a>
    </TextTitle>
    <TextDescription>
      <slot />
    </TextDescription>
    <p
      class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200"
    >
      <UIcon
        name="i-heroicons-link"
        class="h-4 w-4 flex-none"
      />
      <span class="ml-2"> {{ label }}</span>
    </p>
  </li>
</template>
