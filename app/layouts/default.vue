<template>
  <div>
    <a
      href="#profile"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:px-4 focus:py-2 focus:bg-neutral-700 focus:text-neutral-100 focus:rounded-lg focus:text-sm focus:font-medium"
    >
      Skip to content
    </a>
    <ScrollProgress />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
