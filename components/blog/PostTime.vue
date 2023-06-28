<script lang="ts" setup>
import { get } from '@vueuse/core';

const props = defineProps<{
  date: string;
}>();

const date = toRef(props, 'date');
const postDate = computed(() => new Date(get(date)));
const formatted = useDateFormat(postDate, 'DD MMMM YYYY');
</script>

<template>
  <time :datetime="date">
    {{ formatted }}
  </time>
</template>
