<script setup lang="ts">
import { first } from 'underscore'
import TerminalUser from '@/components/TerminalUser.vue'
import { useTerminalStore } from '@/stores/TerminalStore'
import Welcome from '@/components/commands/Welcome.vue'
import CommandNotFound from '@/components/commands/CommandNotFound.vue'
import Help from '@/components/commands/Help.vue'
import History from '@/components/commands/History.vue'
import { storeToRefs } from 'pinia'
import Clear from '@/components/commands/Clear.vue'
import { CommandEnum, commands as availableCommands } from '@/utils/constants'
import Themes from '@/components/commands/Themes.vue'
import Usage from '@/components/commands/Usage.vue'
import Echo from '@/components/commands/Echo.vue'
import Pwd from '@/components/commands/Pwd.vue'
import Gui from '@/components/commands/Gui.vue'
import WhoAmI from '@/components/commands/WhoAmI.vue'
import About from '@/components/commands/About.vue'
import Projects from '@/components/commands/Projects.vue'
import SetName from '@/components/commands/SetName.vue'

const { cmdHistory } = storeToRefs(useTerminalStore())

const isCmdRequiresArgs = (command: string) => {
  return availableCommands.filter((c) => c.requiresArgs).some((c) => c.name === command)
}

const commands = (cmd: string) => {
  const commandArray = cmd.split(' ')
  const command = first(commandArray)

  if (commandArray.length > 1 && !isCmdRequiresArgs(command)) {
    return Usage
  }

  switch (command) {
    case CommandEnum.ABOUT:
      return About
    case CommandEnum.PROJECTS:
      return Projects
    case CommandEnum.GUI:
      return Gui
    case CommandEnum.WELCOME:
      return Welcome
    case CommandEnum.CLEAR:
      return Clear
    case CommandEnum.HELP:
      return Help
    case CommandEnum.HISTORY:
      return History
    case CommandEnum.WHOAMI:
      return WhoAmI
    case CommandEnum.THEME:
      return Themes
    case CommandEnum.ECHO:
      return Echo
    case CommandEnum.PWD:
      return Pwd
    case CommandEnum.SETNAME:
      return SetName
    default:
      return CommandNotFound
  }
}
</script>

<template>
  <div v-for="(cmd, i) in cmdHistory" :key="i">
    <div class="flex items-center">
      <TerminalUser />
      <div class="flex-grow">{{ cmd }}</div>
    </div>
    <div v-if="cmd" class="mb-2">
      <component :is="commands(cmd)" :cmd="first(cmd.split(' '))" :args="cmd.split(' ').slice(1)" />
    </div>
  </div>
</template>
