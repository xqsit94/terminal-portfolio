import { defineStore } from 'pinia'

export const useTerminalStore = defineStore('terminal', {
  state: () => ({
    cmdHistory: ['welcome']
  }),

  actions: {
    addCmdHistory(cmd: string) {
      this.cmdHistory.push(cmd)
    },

    clearCmdHistory() {
      this.cmdHistory = []
    }
  }
})
