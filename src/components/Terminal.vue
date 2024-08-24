<script setup lang="ts">
import TerminalUser from '@/components/TerminalUser.vue'
import { ref, watch, watchEffect } from 'vue'
import { useTerminalStore } from '@/stores/TerminalStore'
import Output from '@/components/Output.vue'
import { storeToRefs } from 'pinia'
import { commands } from '@/utils/constants'

/**
 * Component Variables
 */
const input = ref<string>('')
const container = ref<HTMLDivElement | null>(null)
const terminalInput = ref<HTMLInputElement | null>(null)
const suggestions = ref<string[]>([])

/**
 * Store Variables
 */
const { cmdHistory, pointer } = storeToRefs(useTerminalStore())
const { addCmdHistory, clearCmdHistory, setPointer } = useTerminalStore()

const focusInput = () => {
  terminalInput.value?.focus()
}

const setCursorToEnd = () => {
  setTimeout(() => {
    focusInput()
  }, 1)
}

const resetSuggestions = () => {
  suggestions.value = []
  setPointer(-1)
}

watchEffect(() => {
  if (container.value) {
    container.value.addEventListener('click', focusInput)
  }

  // cleanup
  return () => {
    if (container.value) {
      container.value.removeEventListener('click', focusInput)
    }
  }
})

const handleInputKeyDown = (event: KeyboardEvent) => {
  // if Enter
  if (event.key === 'Enter') {
    handleEnter()
  }

  // if Ctrl + L
  if (event.ctrlKey && event.key === 'l') {
    clearCmdHistory()
  }

  // if ArrowUp
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (pointer.value >= cmdHistory.value.length) return

    if (pointer.value + 1 === cmdHistory.value.length) return

    setPointer(pointer.value + 1)
    input.value = cmdHistory.value[cmdHistory.value.length - pointer.value - 1]
    terminalInput.value?.blur()
  }

  // if ArrowDown
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (pointer.value <= -1) return

    if (pointer.value - 1 === -1) return

    setPointer(pointer.value - 1)
    input.value = cmdHistory.value[cmdHistory.value.length - pointer.value - 1]
    terminalInput.value?.blur()
  }

  // if Tab or Ctrl + I (autocomplete)
  if (event.key === 'Tab' || (event.ctrlKey && event.key === 'i')) {
    event.preventDefault()
    const value = input.value.trim().toLowerCase()
    const filteredCommands = commands.filter(
      (cmd) => cmd.name.startsWith(value) && cmd.type !== 'shortcut'
    )
    if (filteredCommands.length === 1) {
      input.value = filteredCommands[0].name
      if (filteredCommands[0].requiresArgs) {
        input.value += ' '
      }

      setCursorToEnd()
    } else {
      suggestions.value = filteredCommands.map((cmd) => cmd.name)
    }
  }
}

const handleEnter = () => {
  const value = input.value.trim()
  addCmdHistory(value)
  input.value = ''
  terminalInput.value?.blur()
}

watch([input, terminalInput, pointer], () => {
  setCursorToEnd()
  if (input.value === '') {
    resetSuggestions()
    return
  }
})
</script>

<template>
  <div ref="container" class="min-h-screen px-4 py-3">
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
    <div v-if="suggestions.length > 0" class="flex space-x-3">
      <div v-for="suggestion in suggestions" :key="suggestion">{{ suggestion }}</div>
    </div>
  </div>
</template>
