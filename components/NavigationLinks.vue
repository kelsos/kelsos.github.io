<script lang="ts" setup>
defineProps<{
  links: { label: string; to: string }[];
}>();

const emit = defineEmits<{
  click: [];
}>();

function getLink(to: string) {
  if (to.startsWith('#')) {
    return {
      path: '/',
      hash: to,
    };
  }
  return to;
}
</script>

<template>
  <template
    v-for="link in links"
    :key="link.to"
  >
    <NuxtLink
      :to="getLink(link.to)"
      class="flex items-end gap-1.5 font-normal text-md dark:text-white hover:dark:text-zinc-300"
      @click="emit('click')"
    >
      <span> {{ link.label }}</span>
    </NuxtLink>
  </template>
</template>
