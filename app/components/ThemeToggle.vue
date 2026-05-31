<script setup lang="ts">
const { toggleTheme } = useTheme();
</script>

<template>
  <!--
    Prerender-friendly: no reactive state in the rendered markup, so SSR and the
    client agree (no hydration mismatch) and the button ships in the static HTML.
    Both icons are always present; the `.dark` class on <html> (set before paint
    by the no-flash script in app.vue) drives which one shows via the `dark:`
    Tailwind variant — so the correct icon is visible from first paint.
  -->
  <button
    type="button"
    class="p-2 text-muted hover:text-fg transition-colors duration-200"
    aria-label="Toggle color theme"
    @click="toggleTheme()"
  >
    <!-- Visibility classes live on the wrapping span: @nuxt/icon's `.iconify`
         base rule sets `display`, which would override `hidden` on the Icon. -->
    <span class="block dark:hidden">
      <Icon
        name="heroicons:moon"
        class="w-5 h-5"
      />
    </span>
    <span class="hidden dark:block">
      <Icon
        name="heroicons:sun"
        class="w-5 h-5"
      />
    </span>
  </button>
</template>
