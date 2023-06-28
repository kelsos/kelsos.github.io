<script setup lang="ts">
import authorImg from '~/assets/img/author.jpg';
const css = useCssModule();
</script>

<template>
  <main
    class="flex flex-row items-center justify-center h-screen w-full"
    :class="css.hero"
  >
    <section class="py-16 lg:w-4/6 w-full">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <UAvatar
                    size="3xl"
                    :src="authorImg"
                    class="shadow-xl -m-10"
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

<style module>
.hero {
  background: url('~/assets/img/background.jpg');
}
</style>
