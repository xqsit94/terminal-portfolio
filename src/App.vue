<script setup lang="ts">
import Terminal from '@/components/Terminal.vue'

const setTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    document.documentElement.className = theme
  }
}

setTheme()
</script>

<template>
  <Terminal />
</template>
