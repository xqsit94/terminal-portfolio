import { defineStore } from 'pinia'

export const useTerminalStore = defineStore('terminal', {
  state: () => ({
    cmdHistory: [] as string[],
    pointer: -1
  }),

  actions: {
    addCmdHistory(cmd: string) {
      this.cmdHistory.push(cmd)
    },

    clearCmdHistory() {
      this.cmdHistory = []
    },

    setPointer(index: number) {
      this.pointer = index
    }
  }
})
