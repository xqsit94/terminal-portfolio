export enum CommandEnum {
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  GUI = 'gui',
  HELP = 'help',
  CLEAR = 'clear',
  WELCOME = 'welcome',
  HISTORY = 'history',
  WHOAMI = 'whoami',
  THEME = 'themes',
  ECHO = 'echo',
  PWD = 'pwd',
  SETNAME = 'setname',

  TAB = 'Tab or Ctrl + i',
  UP_ARROW = 'Up arrow',
  DOWN_ARROW = 'Down arrow',
  CTRL_L = 'Ctrl + L'
}

export const commands = [
  {
    name: CommandEnum.ABOUT,
    description: 'about me'
  },
  {
    name: CommandEnum.PROJECTS,
    description: 'few projects that I have developed'
  },
  {
    name: CommandEnum.EXPERIENCE,
    description: 'check my experience'
  },
  {
    name: CommandEnum.EDUCATION,
    description: 'check my education'
  },
  {
    name: CommandEnum.GUI,
    description: 'open my portfolio GUI'
  },
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
    name: CommandEnum.WHOAMI,
    description: 'prints current user'
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
    name: CommandEnum.PWD,
    description: 'print the current working directory'
  },
  {
    name: CommandEnum.SETNAME,
    description: 'set the username (replaces default `guest` with your name)',
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
