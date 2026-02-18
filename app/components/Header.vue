<script setup lang="ts">
const isDialogOpen = ref(false);
const activeSection = ref('profile');

const links = computed(() => [
  { label: 'Profile', to: '#profile', id: 'profile' },
  { label: 'Experience', to: '#timeline', id: 'timeline' },
  { label: 'Selected Work', to: '#projects', id: 'projects' },
  { label: 'Expertise', to: '#skills', id: 'skills' },
  { label: 'Blog', to: '/blog', id: 'blog' },
]);

// Scroll spy functionality
function updateActiveSection() {
  if (!import.meta.client)
    return;

  const sections = ['profile', 'timeline', 'projects', 'skills'];
  const scrollPosition = window.scrollY + 100; // Offset for header height

  for (const section of sections.reverse()) {
    const element = document.getElementById(section);
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = section;
      break;
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Set initial state
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', updateActiveSection);
  }
});

// Handle escape key
function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && isDialogOpen.value) {
    isDialogOpen.value = false;
  }
}

// Lock/unlock body scroll
watch(isDialogOpen, (newValue) => {
  if (import.meta.client) {
    if (newValue) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }
    else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    }
  }
});

// Cleanup on unmount
onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
  }
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-neutral-600 bg-neutral-800/75"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderLinks
        v-model="isDialogOpen"
        :links="links"
        :active-section="activeSection"
      />
    </div>

    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isDialogOpen"
        class="fixed inset-0 z-50 bg-neutral-800 lg:hidden"
        @click="isDialogOpen = false"
      >
        <div
          class="flex flex-col h-full"
          @click.stop
        >
          <div
            class="px-4 sm:px-6 border-b border-neutral-600 bg-neutral-800"
          >
            <HeaderLinks
              v-model="isDialogOpen"
              :links="links"
              :active-section="activeSection"
            />
          </div>
          <div class="flex-1 px-4 sm:px-6 py-8 space-y-8">
            <nav
              aria-label="Mobile navigation"
              class="space-y-6"
            >
              <NavigationLinks
                :links="links"
                :active-section="activeSection"
                @click="isDialogOpen = false"
              />
            </nav>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
