<script setup lang="ts">
const route = useRoute();
const isDialogOpen = ref(false);

// On the blog the in-page sections don't exist, so highlight the Blog link
// instead of leaving the scroll spy stuck on its initial value.
const isBlog = computed(() => route.path.startsWith('/blog'));
const activeSection = ref(route.path.startsWith('/blog') ? 'blog' : 'profile');

const links = [
  { label: 'Profile', to: '#profile', id: 'profile' },
  { label: 'Experience', to: '#timeline', id: 'timeline' },
  { label: 'Selected Work', to: '#projects', id: 'projects' },
  { label: 'Expertise', to: '#skills', id: 'skills' },
  { label: 'Blog', to: '/blog', id: 'blog' },
];

// Scroll spy functionality
function updateActiveSection() {
  if (!import.meta.client)
    return;

  // Off the homepage there are no section anchors to spy on.
  if (isBlog.value) {
    activeSection.value = 'blog';
    return;
  }

  const sections = ['profile', 'timeline', 'projects', 'skills'];

  // The last section can be shorter than the viewport, so its top never passes
  // the threshold — treat "scrolled to the bottom" as the last section active.
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) {
    activeSection.value = sections.at(-1)!;
    return;
  }

  const scrollPosition = window.scrollY + 100; // Offset for header height

  for (const section of [...sections].reverse()) {
    const element = document.getElementById(section);
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = section;
      break;
    }
  }
}

// useEventListener auto-removes on unmount and is a no-op during SSR; throttle
// keeps the scroll spy from running on every scroll frame.
useEventListener('scroll', useThrottleFn(updateActiveSection, 100), { passive: true });
watch(() => route.path, updateActiveSection);
onMounted(updateActiveSection); // initial state once the DOM is ready

// Close the mobile menu on Escape and lock body scroll while it's open.
onKeyStroke('Escape', () => {
  if (isDialogOpen.value)
    isDialogOpen.value = false;
});

watch(isDialogOpen, (open) => {
  if (import.meta.client)
    document.body.style.overflow = open ? 'hidden' : '';
});

onUnmounted(() => {
  if (import.meta.client)
    document.body.style.overflow = '';
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-line bg-bg/75"
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
        class="fixed inset-0 z-50 bg-bg lg:hidden"
        @click="isDialogOpen = false"
      >
        <div
          class="flex flex-col h-full"
          @click.stop
        >
          <div
            class="px-4 sm:px-6 border-b border-line bg-bg"
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
