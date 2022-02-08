import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Inter'` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '100em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints
})

export default theme
