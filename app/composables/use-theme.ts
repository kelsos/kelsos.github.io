import { useDark, useToggle } from '@vueuse/core';

/**
 * Light/dark theme state, persisted to localStorage under `theme` and applied
 * as a `dark` class on <html>. The no-flash inline script in app.vue reads the
 * same key before paint to avoid a theme flash on first load.
 */
export function useTheme() {
  const isDark = useDark({
    attribute: 'class',
    selector: 'html',
    storageKey: 'theme',
    valueDark: 'dark',
    valueLight: '',
  });

  const toggleTheme = useToggle(isDark);

  return { isDark, toggleTheme };
}
