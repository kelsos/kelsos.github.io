import { useIntersectionObserver } from '@vueuse/core';

/**
 * `v-reveal` — fades + lifts an element into view the first time it intersects
 * the viewport, via VueUse's `useIntersectionObserver`. The `mounted` hook only
 * runs on the client, so SSR/no-JS output stays fully visible; the directive
 * opts the element into the entrance animation only once mounted. Honors
 * prefers-reduced-motion via the CSS in main.css.
 *
 * Registered universally (not client-only) so SSR can resolve the directive —
 * `getSSRProps` returns no props (Vue calls it during SSR; an unregistered
 * directive throws on the missing hook).
 */
const stoppers = new WeakMap<HTMLElement, () => void>();

// eslint-disable-next-line import/no-default-export -- Nuxt plugins must default-export
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement) {
      el.classList.add('reveal-init');

      const { stop } = useIntersectionObserver(
        el,
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('reveal-in');
              stop();
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
      );

      stoppers.set(el, stop);
    },
    unmounted(el: HTMLElement) {
      stoppers.get(el)?.();
      stoppers.delete(el);
    },
  });
});
