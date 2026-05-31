<script setup lang="ts">
const { date } = defineProps<{
  title: string;
  description: string;
  link: string;
  date: string | Date;
  tags: string[];
}>();

const postDate = computed(() => new Date(date));
const isoDate = computed(() => postDate.value.toISOString());
const year = useDateFormat(postDate, 'YYYY');
const dayMonth = useDateFormat(postDate, 'DD MMM');
</script>

<template>
  <article class="group grid gap-2 py-8 border-b border-line last:border-b-0 md:grid-cols-[8rem_1fr] md:gap-8">
    <div
      v-if="date"
      class="flex items-baseline gap-2 md:flex-col md:gap-0.5 md:pt-1"
    >
      <span class="font-display text-lg font-medium text-fg tabular-nums">
        {{ year }}
      </span>
      <time
        :datetime="isoDate"
        class="text-xs uppercase tracking-widest text-muted tabular-nums"
      >
        {{ dayMonth }}
      </time>
    </div>

    <div>
      <NuxtLink
        :to="link"
        class="block"
      >
        <h2 class="font-display text-xl font-medium text-fg group-hover:text-accent transition-colors duration-200">
          {{ title }}
        </h2>
        <p class="mt-2 text-sm leading-relaxed text-body">
          {{ description }}
        </p>
      </NuxtLink>

      <div
        v-if="tags && tags.length > 0"
        class="mt-3 flex flex-wrap gap-1.5"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs text-muted"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
