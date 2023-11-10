<script setup lang="ts">
import Separator from '@/components/Separator.vue'
</script>

<template>
  <div class="grid gap-2">
    <pre class="w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
    {{
        `
   __  ___          _ __                __
  /  |/  /__ ____  (_) /_____ ____  ___/ /__ ____
 / /|_/ / _ '/ _ \\/ /  '_/ _ '/ _ \\/ _  / _ '/ _ \\
/_/  /_/\\_,_/_//_/_/_/\\_\\\\_,_/_//_/\\_,_/\\_,_/_//_/
        `
      }}
  </pre
    >
    <p>Welcome to my interactive terminal portfolio.</p>
    <p>Here you can find some information about me.</p>
    <Separator>----</Separator>
    <p>
      This projects is open source and available on
      <a
        class="text-secondary border-b border-secondary border-dashed hover:border-solid"
        href="https://github.com/xqsit94/terminal-portfolio"
        target="_blank"
        >Github repo</a
      >
    </p>
    <Separator>----</Separator>

    <p>Use the command `<span class="text-primary">help</span>` to get started</p>
  </div>
</template>
