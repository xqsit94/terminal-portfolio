<script setup lang="ts">
import { commands } from '@/utils/constants'

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
</script>

<template>
  <div class="mb-2">
    <template v-for="command in commands" :key="command.name">
      <div class="flex justify-stretch">
        <div class="text-primary">{{ generateTabs(command.name) }}</div>
        <div>- {{ command.description }}</div>
      </div>
    </template>
  </div>
</template>
