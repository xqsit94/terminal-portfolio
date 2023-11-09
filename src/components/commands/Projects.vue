<script setup lang="ts">
const projects = [
  {
    name: 'Lifeofdev - Personal Blog',
    description: 'My personal blog where I write about my experiences as a developer',
    url: 'https://lifeofdev.com/'
  },
  {
    name: 'Portfolio Terminal',
    description: 'A terminal emulator portfolio built with Vue.js and TailwindCSS',
    url: 'https://terminal.lifeofdev.com/'
  },
  {
    name: 'Gridsome - Geek Blog',
    description: 'A geek blog built with Gridsome and TailwindCSS',
    url: 'https://github.com/xqsit94/gridsome-starter-geek-blog/'
  }
]
</script>

<template>
  <div class="grid gap-2 mt-2 mb-3">
    <h5>Here are some of my projects:</h5>
    <div v-for="(project, i) in projects" :key="project.name" class="grid gap-0.5">
      <a :href="project.url" target="_blank" rel="noopener noreferrer" class="text-primary">
        <span class="mr-2">{{ i + 1 }}.</span>
        <span class="border-b border-dashed border-primary">{{ project.name }}</span>
      </a>
      <p class="text-accent">{{ project.description }}</p>
    </div>
  </div>
</template>
