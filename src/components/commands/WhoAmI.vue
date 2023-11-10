<script setup lang="ts">
import { useTerminalStore } from '@/stores/TerminalStore'

const { username } = useTerminalStore()
</script>

<template>
  <div>{{ username }}</div>
</template>
