<script setup lang="ts">
import { useTerminalStore } from '@/stores/TerminalStore'
import { computed } from 'vue'

const props = defineProps<{
  args: string[]
}>()

const { setUsername } = useTerminalStore()

const username = computed(() => {
  const name = props.args.join(' ')
  return name.trim() === '' ? 'guest' : name
})

setUsername(username.value.toLowerCase())
</script>

<template>
  <div>Hello, {{ username }}!</div>
</template>
