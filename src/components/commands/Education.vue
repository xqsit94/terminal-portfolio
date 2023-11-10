<script setup lang="ts">
const educations = [
  {
    name: 'Madha Engineering College',
    description: 'Bachelor of Engineering (B.E), Computer Science | 2012 - 2016'
  },
  {
    name: 'Assisi Matriculation Higher Secondary School',
    description: 'Certification in Higher Secondary Education, Computer Science | 2010 - 2012'
  }
]
</script>

<template>
  <div class="grid gap-2 mb-3">
    <h5>My Education background:</h5>
    <div v-for="education in educations" :key="education.name" class="grid gap-0.5">
      <div class="text-primary font-semibold">{{ education.name }}</div>
      <p class="text-accent">{{ education.description }}</p>
    </div>
  </div>
</template>
