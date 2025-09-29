<template>
  <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent animate-fadeIn">
          <slot name="title" />
        </h2>
        <div class="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-red-600 to-orange-600 rounded-full" />
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="max-w-xl mx-auto mt-6"
    >
      <div class="text-center text-lg text-zinc-400">
        <slot />
      </div>
    </div>
  </div>
</template>
