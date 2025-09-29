<template>
  <main
    class="flex flex-row items-center justify-center h-screen w-full bg-[url('/img/background.jpg')] bg-cover bg-center"
  >
    <section class="py-16 lg:w-4/6 w-full">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-zinc-800/90 backdrop-blur-sm mb-6 shadow-xl rounded-lg -mt-64 animate-slideUp border border-zinc-700"
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative -mt-20">
                  <NuxtImg
                    class="w-32 h-32 rounded-full object-cover shadow-xl ring-4 ring-zinc-800 animate-fadeIn"
                    src="/img/author.jpg"
                    alt="Profile picture"
                    width="128"
                    height="128"
                  />
                </div>
              </div>
            </div>
            <ProfileBasicDetails />
            <ProfileBasicDescription />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
