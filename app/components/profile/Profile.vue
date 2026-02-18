<template>
  <main
    id="profile"
    aria-label="Profile"
    class="flex items-center justify-center min-h-screen w-full"
  >
    <section class="py-24 w-full">
      <div class="max-w-2xl mx-auto px-4 text-center animate-fadeIn">
        <NuxtImg
          class="w-16 h-16 rounded-full object-cover ring-2 ring-neutral-600 mx-auto"
          src="/img/author.jpg"
          alt="Profile picture"
          width="64"
          height="64"
        />

        <h1 class="mt-8 text-5xl md:text-7xl font-light tracking-tight text-neutral-100">
          Konstantinos Paparas
        </h1>

        <p class="mt-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
          Software Engineer · Berlin, Germany
        </p>

        <p class="mt-8 text-base leading-relaxed text-neutral-400 max-w-2xl mx-auto">
          I'm a software engineer specializing in open-source development with a strong focus on
          privacy-preserving applications. My expertise spans front-end development with Vue.js and TypeScript,
          Android development with Kotlin, and full-stack solutions. Currently leading frontend development at Rotki,
          building tools that empower users to maintain financial privacy while managing their portfolios.
        </p>

        <div class="mt-8 flex justify-center gap-8">
          <a
            href="#projects"
            class="text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors duration-200"
          >
            View My Work &rarr;
          </a>
          <a
            href="#timeline"
            class="text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors duration-200"
          >
            My Journey &rarr;
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
