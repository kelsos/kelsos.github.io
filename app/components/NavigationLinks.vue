<script lang="ts" setup>
const { links, activeSection } = defineProps<{
  links: { label: string; to: string; id?: string }[];
  activeSection?: string;
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

function isActive(link: { to: string; id?: string }) {
  if (link.id && activeSection) {
    return link.id === activeSection;
  }
  return false;
}
</script>

<template>
  <template
    v-for="link in links"
    :key="link.to"
  >
    <NuxtLink
      :to="getLink(link.to)"
      class="block py-3 lg:py-0 lg:inline-flex lg:items-end lg:gap-1.5 font-normal text-xl lg:text-md transition-colors border-b border-zinc-800 lg:border-none last:border-b-0"
      :class="[
        isActive(link)
          ? 'text-orange-500 hover:text-orange-400'
          : 'text-white hover:text-zinc-300',
      ]"
      @click="emit('click')"
    >
      <span> {{ link.label }}</span>
    </NuxtLink>
  </template>
</template>
