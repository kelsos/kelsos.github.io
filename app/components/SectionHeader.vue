<template>
  <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-light tracking-tight text-neutral-100 animate-fadeIn">
          <slot name="title" />
        </h2>
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="max-w-xl mx-auto mt-4"
    >
      <div class="text-center text-base leading-relaxed text-neutral-400">
        <slot />
      </div>
    </div>
  </div>
</template>
