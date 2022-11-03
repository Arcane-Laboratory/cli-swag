import { COLOR, HIGHLIGHT, reset, TEXT } from './colors'
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
const enableColoredLogs = (color: COLOR) => {
  const ERR = color == 'RED' ? HIGHLIGHT.MAGENTA : HIGHLIGHT.RED
  const WARN = color == 'YELLOW' ? HIGHLIGHT.CYAN : HIGHLIGHT.YELLOW
  FORMAT = {
    DEFAULT: ' ' + TEXT.reset + ' ',
    MAJOR: ' ' + reset + TEXT[color],
    MINOR: ' ' + reset + TEXT.dim,
    HIGHLIGHT: {
      DEFAULT: highlightFormat(HIGHLIGHT.WHITE),
      MAJOR: highlightFormat(HIGHLIGHT[color]),
      WARN: highlightFormat(WARN),
      ERROR: highlightFormat(ERR),
    },
  }
  CHECK = ' ' + TEXT[color] + '✓' + reset + ' '
}

const highlightFormat = (color: HIGHLIGHT): string => {
  const textColor = color == HIGHLIGHT.BLACK ? TEXT.WHITE : TEXT.BLACK
  const formatString = ` ${reset}${color}${textColor} `
  return formatString
}

export { cliColorLayout, enableColoredLogs, coloredLogs, FORMAT, CHECK }
