<script setup lang="ts">
import { Icon } from '@iconify/vue'

const educations = [
  {
    name: 'Software Engineer',
    description: 'Oreala B.V | 2022 - current',
    stacks: [
      {
        name: 'Microservices',
        icon: 'uil:server-network'
      },
      {
        name: 'VueJS',
        icon: 'devicon-plain:vuejs'
      },
      {
        name: 'ReactJS',
        icon: 'uil:react'
      },
      {
        name: 'Typescript',
        icon: 'devicon-plain:typescript'
      },
      {
        name: 'Laravel',
        icon: 'devicon-plain:laravel'
      },
      {
        name: 'NodeJS',
        icon: 'devicon-plain:nodejs'
      }
    ]
  },
  {
    name: 'Senior Software Engineer',
    description: 'Colan Infotech Private Limited | 2018 - 2022',
    stacks: [
      {
        name: 'Laravel',
        icon: 'devicon-plain:laravel'
      },
      {
        name: 'Typescript',
        icon: 'devicon-plain:typescript'
      },
      {
        name: 'VueJS',
        icon: 'devicon-plain:vuejs'
      },
      {
        name: 'ReactJS',
        icon: 'uil:react'
      }
    ]
  },
  {
    name: 'PHP Developer',
    description: 'Expose InfoTech India Pvt Ltd | 2017 - 2018',
    stacks: [
      {
        name: 'Laravel',
        icon: 'devicon-plain:laravel'
      },
      {
        name: 'Codeigniter',
        icon: 'devicon-plain:codeigniter'
      },
      {
        name: 'WordPress',
        icon: 'devicon-plain:wordpress'
      }
    ]
  },
  {
    name: 'Web Developer',
    description: 'Slogic Solutions | 2016 - 2017',
    stacks: [
      {
        name: 'PHP',
        icon: 'devicon-plain:php'
      },
      {
        name: 'Codeigniter',
        icon: 'devicon-plain:codeigniter'
      },
      {
        name: 'MySQL',
        icon: 'devicon-plain:mysql'
      },
      {
        name: 'JavaScript',
        icon: 'devicon-plain:javascript'
      }
    ]
  }
]
</script>

<template>
  <div class="grid gap-2 mb-3">
    <h5>Experience:</h5>
    <div v-for="education in educations" :key="education.name" class="grid gap-0.5 mt-2">
      <div class="text-primary font-semibold">{{ education.name }}</div>
      <p class="text-accent">{{ education.description }}</p>
      <div v-if="education.stacks" class="flex-row md:flex md:space-x-2 mt-1">
        <div
          v-for="stack in education.stacks"
          :key="stack.name"
          class="flex space-x-1 text-xs pr-3 py-0.5 items-center"
        >
          <Icon :icon="stack.icon" />
          <span>{{ stack.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
