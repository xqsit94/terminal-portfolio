<script setup lang="ts">
import TerminalUser from '@/components/TerminalUser.vue'
import { useTerminalStore } from '@/stores/TerminalStore'
import Welcome from '@/components/commands/Welcome.vue'
import CommandNotFound from '@/components/commands/CommandNotFound.vue'
import { storeToRefs } from 'pinia'
import Clear from '@/components/commands/Clear.vue'

const { cmdHistory } = storeToRefs(useTerminalStore())

const commands = (cmd: string) => {
  switch (cmd) {
    case 'welcome':
      return Welcome
    case 'clear':
      return Clear
    default:
      return CommandNotFound
  }
}
</script>

<template>
  <div v-for="(cmd, i) in cmdHistory" :key="i">
    <div class="flex items-center">
      <TerminalUser />
      <div class="flex-grow">{{ cmd }}</div>
    </div>
    <div class="mb-2">
      <component :is="commands(cmd)" :cmd="cmd" />
    </div>
  </div>
</template>
