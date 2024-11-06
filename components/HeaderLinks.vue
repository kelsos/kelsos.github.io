<script setup lang="ts">
import NavigationLinks from '~/components/NavigationLinks.vue';

const props = defineProps<{
  modelValue: boolean;
  links: { to: string; label: string }[];
}>();
const emit = defineEmits(['update:modelValue']);
const isDialogOpen = useVModel(props, 'modelValue', emit);

const {
  public: { bluesky, github, email },
} = useRuntimeConfig();
</script>

<template>
  <div class="flex items-center justify-between gap-3 h-16">
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/"
          class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
        >
          <UAvatar src="/apple-touch-icon.png" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center justify-end flex-1 -mr-1.5 gap-3">
      <div class="hidden lg:flex items-center lg:gap-4">
        <NavigationLinks :links="links" />
      </div>

      <div
        class="flex items-center lg:gap-1.5 lg:border-l lg:border-l-zinc-500 pl-1.5"
      >
        <UButton
          v-if="bluesky"
          :to="bluesky"
          target="_blank"
          color="gray"
          variant="ghost"
          icon="i-simple-icons-bluesky"
        />

        <UButton
          v-if="github"
          :to="github"
          target="_blank"
          color="gray"
          variant="ghost"
          icon="i-simple-icons-github"
        />

        <UButton
          v-if="email"
          :to="email"
          target="_blank"
          color="gray"
          variant="ghost"
          icon="i-heroicons-envelope"
        />

        <UButton
          color="gray"
          variant="ghost"
          class="lg:hidden"
          :icon="
            isDialogOpen
              ? 'i-heroicons-x-mark-20-solid'
              : 'i-heroicons-bars-3-20-solid'
          "
          @click="isDialogOpen = !isDialogOpen"
        />
      </div>
    </div>
  </div>
</template>
