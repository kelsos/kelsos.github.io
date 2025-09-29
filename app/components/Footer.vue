<script setup lang="ts">
const year = new Date().getFullYear();
const {
  public: { facebook, bluesky, github, linkedin, keybase, email },
} = useRuntimeConfig();
</script>

<template>
  <section>
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <div class="flex justify-center mt-8 space-x-6">
        <FooterLink
          v-if="facebook"
          :url="facebook"
          aria-label="Facebook"
        >
          <template #description>
            Facebook
          </template>
          <Icon
            name="simple-icons:facebook"
            class="w-5 h-5"
          />
        </FooterLink>

        <FooterLink
          v-if="bluesky"
          :url="bluesky"
          aria-label="Bluesky"
        >
          <template #description>
            Bluesky
          </template>
          <Icon
            name="simple-icons:bluesky"
            class="w-5 h-5"
          />
        </FooterLink>

        <FooterLink
          v-if="github"
          :url="github"
          aria-label="GitHub"
        >
          <template #description>
            GitHub
          </template>
          <Icon
            name="simple-icons:github"
            class="w-5 h-5"
          />
        </FooterLink>

        <FooterLink
          v-if="linkedin"
          :url="linkedin"
          aria-label="LinkedIn"
        >
          <template #description>
            Linkedin
          </template>
          <Icon
            name="simple-icons:linkedin"
            class="w-5 h-5"
          />
        </FooterLink>

        <FooterLink
          v-if="keybase"
          :url="keybase"
          aria-label="Keybase"
        >
          <template #description>
            Linkedin
          </template>
          <Icon
            name="simple-icons:keybase"
            class="w-5 h-5"
          />
        </FooterLink>

        <FooterLink
          v-if="email"
          :url="email"
          aria-label="Email"
        >
          <template #description>
            Email
          </template>
          <Icon
            name="heroicons:envelope"
            class="w-5 h-5"
          />
        </FooterLink>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © {{ year }} Konstantinos Paparas. All rights reserved.
      </p>
    </div>
  </section>
</template>
