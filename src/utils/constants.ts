export enum CommandEnum {
  HELP = 'help',
  CLEAR = 'clear',
  WELCOME = 'welcome',
  HISTORY = 'history',
  THEME = 'themes',
  ECHO = 'echo',

  TAB = 'Tab or Ctrl + i',
  UP_ARROW = 'Up arrow',
  DOWN_ARROW = 'Down arrow',
  CTRL_L = 'Ctrl + L'
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
  },
  {
    name: CommandEnum.HISTORY,
    description: 'check the history of commands'
  },
  {
    name: CommandEnum.THEME,
    description: 'check available themes',
    requiresArgs: true
  },
  {
    name: CommandEnum.ECHO,
    description: 'echo the string',
    requiresArgs: true
  },
  {
    name: CommandEnum.TAB,
    description: 'auto complete the command',
    type: 'shortcut'
  },
  {
    name: CommandEnum.UP_ARROW,
    description: 'go back in history',
    type: 'shortcut'
  },
  {
    name: CommandEnum.DOWN_ARROW,
    description: 'go forward in history',
    type: 'shortcut'
  },
  {
    name: CommandEnum.CTRL_L,
    description: 'clear the terminal',
    type: 'shortcut'
  }
]
