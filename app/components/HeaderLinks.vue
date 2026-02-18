<script setup lang="ts">
import NavigationLinks from '~/components/NavigationLinks.vue';

const isDialogOpen = defineModel<boolean>();

defineProps<{
  links: { to: string; label: string; id?: string }[];
  activeSection?: string;
}>();

const {
  public: { bluesky, github, email },
} = useRuntimeConfig();
</script>

<template>
  <div class="flex items-center justify-between gap-3 h-16">
    <div class="flex items-center gap-6">
      <NuxtLink
        to="/"
        aria-label="Home"
        class="flex items-end gap-1.5 font-bold text-xl text-neutral-100"
      >
        <NuxtImg
          src="/apple-touch-icon.png"
          alt="Konstantinos Paparas logo"
          class="w-8 h-8 rounded-full object-cover"
          width="32"
          height="32"
        />
      </NuxtLink>
    </div>

    <div class="flex items-center justify-end flex-1 -mr-1.5 gap-3">
      <nav
        aria-label="Main navigation"
        class="hidden lg:flex items-center lg:gap-4"
      >
        <NavigationLinks
          :links="links"
          :active-section="activeSection"
        />
      </nav>

      <div
        class="flex items-center lg:gap-1.5 lg:border-l lg:border-l-neutral-600 pl-1.5"
      >
        <NuxtLink
          v-if="bluesky"
          :to="bluesky"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky"
          class="p-2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:bluesky"
            class="w-5 h-5"
          />
        </NuxtLink>

        <NuxtLink
          v-if="github"
          :to="github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="p-2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:github"
            class="w-5 h-5"
          />
        </NuxtLink>

        <NuxtLink
          v-if="email"
          :to="email"
          aria-label="Email"
          class="p-2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="heroicons:envelope"
            class="w-5 h-5"
          />
        </NuxtLink>

        <button
          class="lg:hidden p-2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
          aria-label="Toggle menu"
          :aria-expanded="isDialogOpen"
          @click="isDialogOpen = !isDialogOpen"
        >
          <Icon
            :name="isDialogOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>
  </div>
</template>
