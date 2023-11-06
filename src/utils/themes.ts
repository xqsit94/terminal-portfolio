type ThemeColors = {
  primary: string
  secondary: string
  background: string
  accent: string
  muted: string
}

type Themes = {
  [key: string]: ThemeColors
}

const theme: Themes = {
  light: {
    primary: '#027474',
    secondary: '#FF9D00',
    background: '#EFF3F3',
    accent: '#334155',
    muted: '#64748b'
  },
  dark: {
    primary: '#05CE91',
    secondary: '#FF9D00',
    background: '#1D2A35',
    accent: '#cbd5e1',
    muted: '#64748b'
  }
}

export default theme
