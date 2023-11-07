import { defineStore } from 'pinia'

export const useTerminalStore = defineStore('terminal', {
  state: () =>
    <
      {
        cmdHistory: string[]
      }
    >{
      cmdHistory: ['welcome']
    },

  actions: {
    addCmdHistory(cmd: string) {
      this.cmdHistory.push(cmd)
    },

    clearCmdHistory() {
      this.cmdHistory = []
    }
  }
})
