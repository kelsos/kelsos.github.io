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
        >
          <template #description>
            Facebook
          </template>
          <UIcon name="i-simple-icons-facebook" />
        </FooterLink>

        <FooterLink
          v-if="bluesky"
          :url="bluesky"
        >
          <template #description>
            Bluesky
          </template>
          <UIcon name="i-simple-icons-bluesky" />
        </FooterLink>

        <FooterLink
          v-if="github"
          :url="github"
        >
          <template #description>
            GitHub
          </template>
          <UIcon name="i-simple-icons-github" />
        </FooterLink>

        <FooterLink
          v-if="linkedin"
          :url="linkedin"
        >
          <template #description>
            Linkedin
          </template>
          <UIcon name="i-simple-icons-linkedin" />
        </FooterLink>

        <FooterLink
          v-if="keybase"
          :url="keybase"
        >
          <template #description>
            Linkedin
          </template>
          <UIcon name="i-simple-icons-keybase" />
        </FooterLink>

        <FooterLink
          v-if="email"
          :url="email"
        >
          <template #description>
            Email
          </template>
          <UIcon name="i-heroicons-envelope" />
        </FooterLink>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © {{ year }} Konstantinos Paparas. All rights reserved.
      </p>
    </div>
  </section>
</template>
