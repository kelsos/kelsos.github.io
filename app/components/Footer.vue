<script setup lang="ts">
const year = new Date().getFullYear();
const {
  public: { bluesky, github, linkedin, keybase, email },
} = useRuntimeConfig();
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between"
    >
      <p class="text-sm text-muted">
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
          class="text-muted hover:text-fg transition-colors duration-200"
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
          class="text-muted hover:text-fg transition-colors duration-200"
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
          class="text-muted hover:text-fg transition-colors duration-200"
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
          class="text-muted hover:text-fg transition-colors duration-200"
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
          class="text-muted hover:text-fg transition-colors duration-200"
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
