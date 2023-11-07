<script setup lang="ts">
import TerminalUser from '@/components/TerminalUser.vue'
import { ref, watchEffect } from 'vue'
import { useTerminalStore } from '@/stores/TerminalStore'
import Output from '@/components/Output.vue'

/**
 * Component Variables
 */
const input = ref<string>('')
const container = ref<HTMLDivElement | null>(null)
const terminalInput = ref<HTMLInputElement | null>(null)

/**
 * Store Variables
 */
const { addCmdHistory } = useTerminalStore()

const handleDivClick = () => {
  terminalInput.value?.focus()
}

watchEffect(() => {
  if (container.value) {
    container.value.addEventListener('click', handleDivClick)
  }
})

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleEnter()
  }
}

const handleEnter = () => {
  const value = input.value.trim().toLowerCase()
  addCmdHistory(value)
  input.value = ''
}
</script>

<template>
  <div ref="container" class="h-screen px-4 py-3">
    <Output />
    <form class="flex" @submit.prevent>
      <label for="terminal-input">
        <TerminalUser />
      </label>
      <input
        v-model="input"
        ref="terminalInput"
        class="flex-grow bg-transparent outline-none caret-primary font-medium"
        type="text"
        id="terminal-input"
        name="terminal-input"
        autoComplete="off"
        spellCheck="false"
        autoFocus
        autoCapitalize="off"
        @keydown="handleInputKeyDown"
      />
    </form>
  </div>
</template>
