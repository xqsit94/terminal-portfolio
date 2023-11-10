import { defineStore } from 'pinia'

export const useTerminalStore = defineStore('terminal', {
  state: () => ({
    username: localStorage.getItem('username') || 'guest',
    cmdHistory: ['welcome'] as string[],
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
    },

    setUsername(username: string) {
      this.username = username
      localStorage.setItem('username', username)
    }
  }
})
