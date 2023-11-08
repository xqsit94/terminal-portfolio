<script setup lang="ts">
import { commands } from '@/utils/constants'
import { computed } from 'vue'

const highestCommandLength = Math.max(...commands.map((c) => c.name.length))

const generateTabs = (commandName: string): string => {
  let tabs = '\xA0\xA0'
  const commandLength = commandName.length
  const difference = highestCommandLength - commandLength
  for (let i = 0; i < difference; i++) {
    tabs += '\xA0'
  }
  return commandName + tabs
}

const terminalCommands = computed(() => commands.filter((c) => !c.type || c.type === 'command'))
const shortcuts = computed(() => commands.filter((c) => c.type === 'shortcut'))
</script>

<template>
  <div class="mb-2 grid gap-3">
    <div>
      <div v-for="command in terminalCommands" :key="command.name" class="flex justify-stretch">
        <div class="text-primary">{{ generateTabs(command.name) }}</div>
        <div>- {{ command.description }}</div>
      </div>
    </div>
    <div>
      <div v-for="shortcut in shortcuts" :key="shortcut.name" class="flex justify-stretch">
        <div>{{ generateTabs(shortcut.name) }}</div>
        <div>=> {{ shortcut.description }}</div>
      </div>
    </div>
  </div>
</template>
