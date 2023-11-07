<script setup lang="ts">
import TerminalUser from '@/components/TerminalUser.vue'
import { useTerminalStore } from '@/stores/TerminalStore'
import Welcome from '@/components/commands/Welcome.vue'
import CommandNotFound from '@/components/commands/CommandNotFound.vue'
import Help from '@/components/commands/Help.vue'
import { storeToRefs } from 'pinia'
import Clear from '@/components/commands/Clear.vue'
import { CommandEnum } from '@/utils/constants'

const { cmdHistory } = storeToRefs(useTerminalStore())

const commands = (cmd: string) => {
  switch (cmd) {
    case CommandEnum.WELCOME:
      return Welcome
    case CommandEnum.CLEAR:
      return Clear
    case CommandEnum.HELP:
      return Help
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
    <div v-if="cmd" class="mb-2">
      <component :is="commands(cmd)" :cmd="cmd" />
    </div>
  </div>
</template>
