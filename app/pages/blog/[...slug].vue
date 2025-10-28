<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});

const route = useRoute();

const { data } = await useAsyncData(route.path, async () => {
  const post = await queryCollection('blog').path(route.path).first();
  return post || null;
});

// Redirect if post not found
if (!data.value) {
  await navigateTo('/blog');
}

const postDate = computed(() => data.value?.date);
const formattedDate = useDateFormat(postDate, 'DD MMMM YYYY');
</script>

<template>
  <main
    v-if="data"
    class="flex-col flex items-center"
  >
    <div class="lg:max-w-3xl font-normal text-zinc-300">
      <button
        class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
        @click="navigateTo('/blog')"
      >
        <Icon
          name="heroicons:chevron-left"
          class="w-4 h-4"
        />
        Back
      </button>
      <SectionHeader>
        <template #title>
          {{ data.title }}
        </template>
        <span> {{ formattedDate }}</span>
      </SectionHeader>
      <div class="[&_p]:py-2 [&_p]:text-zinc-300 [&_p]:text-justify">
        <ContentRenderer :value="data" />
      </div>
    </div>
  </main>
</template>
