export enum CommandEnum {
  HELP = 'help',
  CLEAR = 'clear',
  WELCOME = 'welcome'
}

export const commands = [
  {
    name: CommandEnum.HELP,
    description: 'check all available commands'
  },
  {
    name: CommandEnum.CLEAR,
    description: 'clear the terminal'
  },
  {
    name: CommandEnum.WELCOME,
    description: 'welcome message'
  }
]
