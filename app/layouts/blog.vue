<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <div class="flex-1 py-12">
      <slot />
    </div>

    <Footer />
  </div>
</template>
