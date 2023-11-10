<script setup lang="ts">
import { useTerminalStore } from '@/stores/TerminalStore'

const props = defineProps<{
  args: string[]
}>()

const { setUsername } = useTerminalStore()

setUsername(props.args.join(' ').toLowerCase())
</script>

<template>
  <div>Hello, {{ args.join(' ') }}!</div>
</template>
