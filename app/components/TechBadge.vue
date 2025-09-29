<script setup lang="ts">
defineProps<{
  tech: string;
  color?: string;
}>();

function getColorClasses(tech: string) {
  // Dark theme versions - only includes used tech badges
  const darkColorMap: Record<string, string> = {
    // Languages
    'TypeScript': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Python': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Python CLI': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Kotlin': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'Go': 'bg-cyan-900/30 text-cyan-400 border-cyan-800',
    'Go CLI': 'bg-cyan-900/30 text-cyan-400 border-cyan-800',
    'C#': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'JavaScript': 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
    'Java': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'Lua': 'bg-indigo-900/30 text-indigo-400 border-indigo-800',
    'Rust': 'bg-orange-900/30 text-orange-400 border-orange-800',

    // Frontend
    'Vue.js': 'bg-green-900/30 text-green-400 border-green-800',
    'Vue.js 3': 'bg-green-900/30 text-green-400 border-green-800',
    'Nuxt.js': 'bg-green-900/30 text-green-400 border-green-800',
    'Angular': 'bg-red-900/30 text-red-400 border-red-800',
    'Tailwind CSS': 'bg-teal-900/30 text-teal-400 border-teal-800',
    'PostCSS': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'Storybook': 'bg-pink-900/30 text-pink-400 border-pink-800',
    'Vue I18n': 'bg-green-900/30 text-green-400 border-green-800',
    'Vite': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'Vitest': 'bg-yellow-900/30 text-yellow-400 border-yellow-800',

    // Backend & Mobile
    '.NET Framework': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'REST APIs': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Android': 'bg-green-900/30 text-green-400 border-green-800',
    'Architecture Components': 'bg-green-900/30 text-green-400 border-green-800',
    'Koin DI': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'Material Design': 'bg-blue-900/30 text-blue-400 border-blue-800',

    // Tools & DevOps
    'Docker': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Ansible': 'bg-red-900/30 text-red-400 border-red-800',
    'Git': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'pytest': 'bg-blue-900/30 text-blue-400 border-blue-800',
    'Robolectric': 'bg-green-900/30 text-green-400 border-green-800',
    'MockK': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'npm': 'bg-red-900/30 text-red-400 border-red-800',
    'pnpm': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'uv': 'bg-purple-900/30 text-purple-400 border-purple-800',
    'Gradle': 'bg-green-900/30 text-green-400 border-green-800',
    'ESLint': 'bg-purple-900/30 text-purple-400 border-purple-800',

    // Project specific
    'Ethereum': 'bg-indigo-900/30 text-indigo-400 border-indigo-800',
    'Web3': 'bg-amber-900/30 text-amber-400 border-amber-800',
    'Portfolio': 'bg-orange-900/30 text-orange-400 border-orange-800',
    'Open Source': 'bg-red-900/30 text-red-400 border-red-800',

    // Specialized
    'CLI Development': 'bg-cyan-900/30 text-cyan-400 border-cyan-800',
    'Cross-platform Apps': 'bg-indigo-900/30 text-indigo-400 border-indigo-800',
    'UI/UX Design Systems': 'bg-pink-900/30 text-pink-400 border-pink-800',
    'Privacy-focused Apps': 'bg-gray-900/30 text-gray-400 border-gray-800',
    'Developer Tooling': 'bg-amber-900/30 text-amber-400 border-amber-800',
  };

  return darkColorMap[tech] || 'bg-zinc-900/30 text-zinc-400 border-zinc-800';
}
</script>

<template>
  <span
    :class="getColorClasses(tech)"
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105"
  >
    {{ tech }}
  </span>
</template>
