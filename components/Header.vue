<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue';

const isDialogOpen = ref(false);

const links = computed(() => [
  { label: 'Profile', to: '#profile' },
  { label: 'Timeline', to: '#timeline' },
  { label: 'Projects', to: '#projects' },
  { label: 'Blog', to: '/blog' },
]);
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-zinc-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-900/75"
  >
    <UContainer>
      <HeaderLinks
        v-model="isDialogOpen"
        :links="links"
      />
    </UContainer>

    <TransitionRoot
      :show="isDialogOpen"
      as="template"
    >
      <Dialog
        as="div"
        @close="isDialogOpen = false"
      >
        <DialogPanel
          class="fixed inset-0 z-50 overflow-y-auto bg-white dark:bg-zinc-900 lg:hidden"
        >
          <div
            class="px-4 sm:px-6 sticky top-0 border-b border-zinc-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-900/75 backdrop-blur z-10"
          >
            <HeaderLinks
              v-model="isDialogOpen"
              :links="links"
            />
          </div>
          <div class="px-4 sm:px-6 py-4 sm:py-6">
            <NavigationLinks
              :links="links"
              @click="isDialogOpen = false"
            />
          </div>
        </DialogPanel>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
