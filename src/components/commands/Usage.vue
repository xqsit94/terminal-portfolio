<script setup lang="ts">
defineProps<{
  cmd: string
}>()
</script>

<template>
  <div>Usage: {{ cmd }}</div>
</template>
