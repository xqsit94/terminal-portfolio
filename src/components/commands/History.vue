<script setup lang="ts">
import { useTerminalStore } from '@/stores/TerminalStore'

const { cmdHistory } = useTerminalStore()

const history = [...new Set(cmdHistory)]
</script>

<template>
  <div class="mb-2">
    <div v-for="cmd in history" :key="cmd" class="text-primary">
      {{ cmd }}
    </div>
  </div>
</template>
