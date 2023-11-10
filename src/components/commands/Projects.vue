<script setup lang="ts">
import { useUserAgent } from '@/utils/user-agent'
import Links from '@/components/Links.vue'

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

const { isMac } = useUserAgent()
</script>

<template>
  <div class="grid gap-2 mt-2 mb-3">
    <h5>Here are some of my projects:</h5>
    <div v-for="(project, i) in projects" :key="project.name" class="grid gap-0.5">
      <Links
        :i="i + 1"
        :name="project.name"
        :description="project.description"
        :url="project.url"
      />
    </div>
  </div>
</template>
