<script lang="ts" setup>
const { date } = defineProps<{
  date: string;
}>();

const postDate = computed(() => new Date(date));
const formatted = useDateFormat(postDate, 'DD MMMM YYYY');
</script>

<template>
  <time :datetime="date">
    {{ formatted }}
  </time>
</template>
