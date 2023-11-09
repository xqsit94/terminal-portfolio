<script setup lang="ts">
defineProps<{
  args: string[]
}>()
</script>

<template>
  <div>{{ args.join(' ') }}</div>
</template>
