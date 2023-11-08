<script setup lang="ts">
import themes from '@/utils/themes'

const themeArray = Object.keys(themes)
const randomTheme = themeArray[Math.floor(Math.random() * themeArray.length)]
</script>

<template>
  <div class="mb-2 grid gap-3">
    <div>
      <div v-for="theme in themeArray" :key="theme" class="flex justify-stretch">
        <div class="text-primary">{{ theme }}</div>
      </div>
    </div>
    <div>
      <p>Usage: themes set <span class="text-secondary">&lt;theme-name&gt;</span></p>
      <p>
        Eg: themes set <span class="text-secondary">{{ randomTheme }}</span>
      </p>
    </div>
  </div>
</template>
