import { COLOR, HIGHLIGHT, reset, spacedReset, TEXT } from './colors'
import { cliColorLayout, settings } from './init'

let CHECK = ' ✓ '

let FORMAT = {
  DEFAULT: ' ',
  MAJOR: '',
  MINOR: '',
  WARN: '',
  ERROR: '',
  HIGHLIGHT: {
    DEFAULT: ' ',
    MAJOR: ' ',
    WARN: ' ',
    ERROR: ' ',
  },
}
const enableColoredLogs = (color: COLOR) => {
  const ERR = color == 'RED' ? TEXT.MAGENTA : TEXT.RED
  const WARN = color == 'YELLOW' ? TEXT.CYAN : TEXT.YELLOW
  const ERR_HIGHLIGHT = color == 'RED' ? HIGHLIGHT.MAGENTA : HIGHLIGHT.RED
  const WARN_HIGHLIGHT = color == 'YELLOW' ? HIGHLIGHT.CYAN : HIGHLIGHT.YELLOW
  FORMAT = {
    DEFAULT: ' ' + TEXT.reset + ' ',
    MAJOR: ' ' + reset + TEXT[color],
    MINOR: ' ' + reset + TEXT.dim,
    WARN: WARN_HIGHLIGHT,
      ERROR: ERR_HIGHLIGHT,
    HIGHLIGHT: {
      DEFAULT: HIGHLIGHT.WHITE,
      MAJOR: HIGHLIGHT[color],
      WARN: WARN_HIGHLIGHT,
      ERROR: ERR_HIGHLIGHT,
    },
  }
  CHECK = ' ' + TEXT[color] + '✓' + reset + ' '
}

const highlightFormat = (color: HIGHLIGHT): string => {
  const textColor = color == HIGHLIGHT.BLACK ? TEXT.WHITE : TEXT.BLACK
  const formatString = ` ${reset}${color}${textColor} `
  return formatString
}

const colorCallout = (string: string | number): string => {
  if (settings.color == undefined || settings.color == false)
    return ` ${string} `
  return `${highlightFormat(HIGHLIGHT[settings.color])}${string}${spacedReset}`
}
const colorHighlight = (string: string | number): string => {
  if (settings.color == undefined || settings.color == false)
    return ` ${string} `
  return `${highlightFormat(HIGHLIGHT.WHITE)}${string}${spacedReset}`
}
const colorMajor = (string: string | number): string => {
  if (settings.color == undefined || settings.color == false)
    return string.toString()
  return `${TEXT[settings.color]}${string}${reset}`
}
const colorMinor = (string: string | number): string => {
  if (settings.color == undefined || settings.color == false)
    return string.toString()
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
