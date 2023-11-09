<script setup lang="ts">
import themes from '@/utils/themes'
import { computed } from 'vue'

const props = defineProps<{
  args: string[]
}>()

const themeArray = Object.keys(themes)
const randomTheme = themeArray[Math.floor(Math.random() * themeArray.length)]

const validTheme = (theme: string) => {
  return Object.keys(themes).includes(theme)
}

const validArgs = computed(() => {
  return props.args.length === 2 && validTheme(props.args[1])
})

const setTheme = () => {
  if (validArgs.value) {
    localStorage.setItem('theme', props.args[1])
    document.documentElement.className = props.args[1]
  }
}

setTheme()
</script>

<template>
  <div v-if="!validArgs" class="mb-2 grid gap-3">
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
