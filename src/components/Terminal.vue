<script setup lang="ts">
import TerminalUser from '@/components/TerminalUser.vue'
import { ref, watchEffect } from 'vue'

const container = ref<HTMLDivElement | null>(null)
const terminalInput = ref<HTMLInputElement | null>(null)

const handleDivClick = () => {
  terminalInput.value?.focus()
}

watchEffect(() => {
  if (container.value) {
    container.value.addEventListener('click', handleDivClick)
  }
})
</script>

<template>
  <div ref="container" class="h-screen px-4 py-3">
    <form class="flex">
      <label for="terminal-input">
        <TerminalUser />
      </label>
      <input
        ref="terminalInput"
        class="flex-grow bg-transparent outline-none caret-primary font-medium"
        type="text"
        id="terminal-input"
        autoComplete="off"
        spellCheck="false"
        autoFocus
        autoCapitalize="off"
      />
    </form>
  </div>
</template>
