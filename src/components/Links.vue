<script setup lang="ts">
import { ref } from 'vue'
import { useUserAgent } from '@/utils/user-agent'

defineProps<{
  i: number
  name: string
  description: string
  url: string
}>()

const showHint = ref<boolean>(false)
const { isMac, isMobile } = useUserAgent()

const openLink = (event: PointerEvent, url: string) => {
  if (isMobile) {
    window.open(url, '_blank')
    return
  }

  // ctrlKey for Windows/Linux, metaKey for Mac
  const key = isMac ? 'metaKey' : 'ctrlKey'
  if (event[key]) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="flex space-x-2 items-center">
    <div
      class="text-primary cursor-pointer"
      @click="openLink($event as PointerEvent, url)"
      @mouseover="showHint = true"
      @mouseleave="showHint = false"
    >
      <span v-if="i" class="mr-2">{{ i }}.</span>
      <span class="border-b border-dashed border-primary">{{ name }}</span>
    </div>
    <p v-if="showHint" class="text-xs text-muted">
      --> Follow Link ({{ isMac ? 'cmd' : 'ctrl' }} + click)
    </p>
  </div>
  <p class="text-accent">{{ description }}</p>
</template>
