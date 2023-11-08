<script setup lang="ts">
import Separator from '@/components/Separator.vue'
</script>

<template>
  <div class="grid grid-cols-2 mb-8">
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
      <p>Welcome to my terminal portfolio</p>
      <p>Here you can find some information about me and my projects</p>
      <Separator>----</Separator>
      <p>Use the command `<span class="text-primary">help</span>` to get started</p>
    </div>
    <pre class="text-primary">
    {{
        `
        ▐▓█▀▀▀▀▀▀▀▀▀█▓▌░▄▄▄▄▄░
        ▐▓█░░▀░░▀▄░░█▓▌░█▄▄▄█░
        ▐▓█░░▄░░▄▀░░█▓▌░█▄▄▄█░
        ▐▓█▄▄▄▄▄▄▄▄▄█▓▌░█████░
        ░░░░▄▄███▄▄░░░░░█████░
        `
      }}
  </pre
    >
  </div>
</template>
