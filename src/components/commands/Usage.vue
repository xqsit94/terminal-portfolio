<script setup lang="ts">
defineProps<{
  cmd: string
}>()
</script>

<template>
  <div>usage: {{ cmd }}</div>
</template>
