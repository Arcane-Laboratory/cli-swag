import { HIGHLIGHT_COLOR, reset, TEXT_COLOR } from './colors'
import { cliColorLayout } from './init'

const coloredLogs = true
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
const enableColoredLogs = (format: cliColorLayout) => {
  const { DEFAULT, MAJOR, MINOR, HIGHLIGHT } = format
  const ERR = HIGHLIGHT.ERROR ? HIGHLIGHT.ERROR : HIGHLIGHT_COLOR.BGred
  const WARN = HIGHLIGHT.WARN ? HIGHLIGHT.WARN : HIGHLIGHT_COLOR.BGyellow
  FORMAT = {
    DEFAULT: ' ' + DEFAULT + ' ',
    MAJOR: ' ' + reset + MAJOR,
    MINOR: ' ' + reset + MINOR,
    HIGHLIGHT: {
      DEFAULT: highlightFormat(HIGHLIGHT.DEFAULT),
      MAJOR: highlightFormat(HIGHLIGHT.MAJOR),
      WARN: highlightFormat(WARN),
      ERROR: highlightFormat(ERR),
    },
  }
  CHECK = ' ' + TEXT_COLOR.green + '✓' + reset + ' '
}

const highlightFormat = (color: HIGHLIGHT_COLOR): string => {
  const textColor =
    color == HIGHLIGHT_COLOR.BGblack ? TEXT_COLOR.white : TEXT_COLOR.black
  return ' ' + reset + color + textColor + ' '
}

export { cliColorLayout, enableColoredLogs, coloredLogs, FORMAT, CHECK }
