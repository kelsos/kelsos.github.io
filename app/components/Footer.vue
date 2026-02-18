<script setup lang="ts">
const year = new Date().getFullYear();
const {
  public: { bluesky, github, linkedin, keybase, email },
} = useRuntimeConfig();
</script>

<template>
  <footer class="border-t border-neutral-600">
    <div
      class="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between sm:px-6 lg:px-8"
    >
      <p class="text-sm text-neutral-500">
        &copy; {{ year }} Konstantinos Paparas
      </p>
      <nav
        aria-label="Social links"
        class="flex items-center gap-4"
      >
        <a
          v-if="bluesky"
          :href="bluesky"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Bluesky"
          class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:bluesky"
            class="w-4 h-4"
          />
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="GitHub"
          class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:github"
            class="w-4 h-4"
          />
        </a>
        <a
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="LinkedIn"
          class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:linkedin"
            class="w-4 h-4"
          />
        </a>
        <a
          v-if="keybase"
          :href="keybase"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Keybase"
          class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="simple-icons:keybase"
            class="w-4 h-4"
          />
        </a>
        <a
          v-if="email"
          :href="email"
          aria-label="Email"
          class="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
        >
          <Icon
            name="heroicons:envelope"
            class="w-4 h-4"
          />
        </a>
      </nav>
    </div>
  </footer>
</template>
