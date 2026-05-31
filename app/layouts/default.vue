<template>
  <div class="flex flex-col min-h-screen">
    <a
      href="#profile"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:px-4 focus:py-2 focus:bg-surface focus:text-fg focus:rounded-lg focus:text-sm focus:font-medium focus:ring-1 focus:ring-line"
    >
      Skip to content
    </a>
    <ScrollProgress />
    <Header />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>
