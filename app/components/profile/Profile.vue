<template>
  <main
    id="profile"
    aria-label="Profile"
    class="w-full border-b border-line"
  >
    <section class="max-w-5xl mx-auto px-6 py-24 md:py-36">
      <div class="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div class="max-w-2xl animate-fadeIn">
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-accent" />
            <p class="text-xs font-medium uppercase tracking-widest text-muted">
              Software Engineer · Berlin, Germany
            </p>
          </div>

          <h1
            aria-label="Konstantinos Paparas"
            class="mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-fg"
          >
            Konstantinos<br />Paparas
          </h1>

          <p class="mt-8 text-lg leading-relaxed text-body">
            I build open-source software with a focus on privacy-preserving applications —
            front-end with Vue.js and TypeScript, Android with Kotlin, and full-stack in between.
            Currently leading frontend at <span class="text-fg font-medium">Rotki</span>,
            building tools that keep financial data private.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="#projects"
              class="group inline-flex items-center gap-1.5 text-sm font-medium text-fg border-b border-accent pb-1 transition-colors duration-200 hover:text-accent"
            >
              View selected work
              <Icon
                name="heroicons:arrow-down-right"
                class="w-4 h-4 text-accent"
              />
            </a>
            <a
              href="#timeline"
              class="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
            >
              My journey &rarr;
            </a>
          </div>
        </div>

        <div class="hidden md:block shrink-0">
          <NuxtImg
            class="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover ring-1 ring-line shadow-xl"
            src="/img/author.jpg"
            alt="Konstantinos Paparas"
            width="192"
            height="192"
          />
        </div>
      </div>
    </section>
  </main>
</template>
