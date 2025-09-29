<script setup lang="ts">
interface Skill {
  name: string;
  category: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'language', level: 'expert' },
  { name: 'Python', category: 'language', level: 'expert' },
  { name: 'Kotlin', category: 'language', level: 'expert' },
  { name: 'Go', category: 'language', level: 'advanced' },
  { name: 'C#', category: 'language', level: 'advanced' },
  { name: 'JavaScript', category: 'language', level: 'expert' },
  { name: 'Lua', category: 'language', level: 'intermediate' },
  { name: 'Rust', category: 'language', level: 'intermediate' },

  // Frontend
  { name: 'Vue.js', category: 'frontend', level: 'expert' },
  { name: 'Nuxt.js', category: 'frontend', level: 'expert' },
  { name: 'Angular', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind', category: 'frontend', level: 'expert' },
  { name: 'Vite', category: 'frontend', level: 'advanced' },

  // Backend & Tools
  { name: 'Docker', category: 'tool', level: 'advanced' },
  { name: 'Git', category: 'tool', level: 'expert' },
  { name: '.NET', category: 'backend', level: 'advanced' },
  { name: 'REST APIs', category: 'backend', level: 'expert' },

  // Mobile
  { name: 'Android', category: 'mobile', level: 'expert' },
  { name: 'Material Design', category: 'mobile', level: 'expert' },
];

function getLevelColor(level?: string) {
  switch (level) {
    case 'expert': return 'ring-2 ring-green-600/50 bg-green-900/20';
    case 'advanced': return 'ring-2 ring-blue-600/50 bg-blue-900/20';
    case 'intermediate': return 'ring-1 ring-gray-600/50 bg-gray-900/20';
    default: return 'ring-1 ring-gray-700/50 bg-gray-900/20';
  }
}

function getCategoryIcon(category: string) {
  const icons: Record<string, string> = {
    language: '{ }',
    frontend: '< />',
    backend: '[ ]',
    mobile: '📱',
    tool: '⚙️',
  };
  return icons[category] || '•';
}
</script>

<template>
  <section class="items-center py-16 lg:min-h-screen px-4">
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="max-w-xl mx-auto">
        <div class="text-center text-4xl font-bold">
          Skills & Technologies
        </div>
      </div>
      <div class="max-w-xl mx-auto mt-8">
        <p class="text-center text-sm text-gray-400">
          Hover over skills to see proficiency level
        </p>
      </div>
      <div class="mt-16">
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <div
            v-for="skill in skills"
            :key="skill.name"
            :class="getLevelColor(skill.level)"
            class="group relative aspect-square rounded-xl flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <div class="text-xs opacity-50 mb-1">
              {{ getCategoryIcon(skill.category) }}
            </div>
            <div class="text-xs text-center font-medium text-gray-300 group-hover:text-white">
              {{ skill.name }}
            </div>
            <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500 whitespace-nowrap">
              {{ skill.level }}
            </div>
          </div>
        </div>
        <div class="mt-20 flex justify-center gap-6 text-xs text-gray-500">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded ring-2 ring-green-600/50 bg-green-900/20" />
            Expert
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded ring-2 ring-blue-600/50 bg-blue-900/20" />
            Advanced
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded ring-1 ring-gray-600/50 bg-gray-900/20" />
            Intermediate
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
