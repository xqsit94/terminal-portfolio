<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTerminalStore } from '@/stores/TerminalStore'

const { username } = storeToRefs(useTerminalStore())
</script>

<template>
  <div class="flex mr-2.5 font-semibold">
    <div class="text-secondary">{{ username }}</div>
    @
    <div class="text-primary">terminal.lifeofdev.com</div>
    :~$
  </div>
</template>
