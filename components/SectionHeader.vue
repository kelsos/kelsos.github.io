<template>
  <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div class="max-w-xl mx-auto">
      <div class="text-center text-4xl font-bold">
        <slot name="title" />
      </div>
    </div>
    <div class="max-w-xl mx-auto mt-8">
      <p class="text-center text-sm text-gray-400">
        <slot />
      </p>
    </div>
  </div>
</template>
