<script setup lang="ts">
defineProps<{
  cmd: string
}>()
</script>

<template>
  <div v-if="cmd && cmd.length > 0">Command not found: {{ cmd }}</div>
</template>
