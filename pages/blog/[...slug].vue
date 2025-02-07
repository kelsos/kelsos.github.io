<script setup lang="ts">
import { get } from '@vueuse/core';

definePageMeta({
  layout: 'blog',
});

const route = useRoute();
const css = useCssModule();

const { data } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first());

if (!isDefined(data))
  navigateTo('/blog');

const postDate = computed(() => get(data)?.date);
const formattedDate = useDateFormat(postDate, 'DD MMMM YYYY');
</script>

<template>
  <main
    v-if="data"
    class="flex-col flex items-center"
  >
    <div class="lg:max-w-3xl font-normal text-zinc-300">
      <UButton
        label="Back"
        class="mt-4"
        @click="navigateTo('/blog')"
      >
        <template #leading>
          <UIcon name="i-heroicons-chevron-left" />
        </template>
      </UButton>
      <SectionHeader>
        <template #title>
          {{ data.title }}
        </template>
        <span> {{ formattedDate }}</span>
      </SectionHeader>
      <UContainer :class="css.content">
        <ContentRenderer :value="data" />
      </UContainer>
    </div>
  </main>
</template>

<style module>
.content p {
  @apply py-2 text-zinc-300 text-justify;
}
</style>
