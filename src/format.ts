import { COLOR, HIGHLIGHT, reset, spacedReset, TEXT } from './colors'
import { cliColorLayout, settings } from './init'

let CHECK = ' ✓ '

let FORMAT = {
  DEFAULT: ' ',
  MAJOR: '',
  MINOR: '',
  HIGHLIGHT: {
    DEFAULT: ' ',
    MAJOR: ' ',
    WARN: ' ',
    ERROR: ' ',
  },
}
const enableColoredLogs = (color: COLOR) => {
  const ERR = color == 'RED' ? HIGHLIGHT.MAGENTA : HIGHLIGHT.RED
  const WARN = color == 'YELLOW' ? HIGHLIGHT.CYAN : HIGHLIGHT.YELLOW
  FORMAT = {
    DEFAULT: ' ' + TEXT.reset + ' ',
    MAJOR: ' ' + reset + TEXT[color],
    MINOR: ' ' + reset + TEXT.dim,
    HIGHLIGHT: {
      DEFAULT: HIGHLIGHT.WHITE,
      MAJOR: HIGHLIGHT[color],
      WARN: WARN,
      ERROR: ERR,
    },
  }
  CHECK = ' ' + TEXT[color] + '✓' + reset + ' '
}

const highlightFormat = (color: HIGHLIGHT): string => {
  const textColor = color == HIGHLIGHT.BLACK ? TEXT.WHITE : TEXT.BLACK
  const formatString = ` ${reset}${color}${textColor} `
  return formatString
}

const colorCallout = (string: string): string => {
  return `${highlightFormat(HIGHLIGHT[settings.color])}${string}${spacedReset}`
}
const colorHighlight = (string: string): string => {
  return `${highlightFormat(HIGHLIGHT.WHITE)}${string}${spacedReset}`
}
const colorMajor = (string: string): string => {
  return `${TEXT[settings.color]}${string}${reset}`
}
const colorMinor = (string: string): string => {
  return `${TEXT.dim}${string}${reset}`
}

export {
  cliColorLayout,
  enableColoredLogs,
  CHECK,
  colorCallout,
  colorHighlight,
  colorMajor,
  colorMinor,
  FORMAT,
}
