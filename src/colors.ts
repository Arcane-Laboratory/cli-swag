const underscore = '\x1b[4m'
const blink = '\x1b[5m'
const reverse = '\x1b[7m'
const hidden = '\x1b[8m'
const reset = '\x1b[0m'
const spacedReset = ` ${reset} `

type COLOR =
  | 'BLACK'
  | 'RED'
  | 'GREEN'
  | 'YELLOW'
  | 'BLUE'
  | 'MAGENTA'
  | 'CYAN'
  | 'WHITE'

enum TEXT {
  BLACK = '\x1b[30m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  YELLOW = '\x1b[33m',
  BLUE = '\x1b[34m',
  MAGENTA = '\x1b[35m',
  CYAN = '\x1b[36m',
  WHITE = '\x1b[37m',
  reset = '\x1b[0m',
  bright = '\x1b[1m',
  // dim = '\x1b[2m',
  dim = '\x1b[30m',
}

enum HIGHLIGHT {
  BLACK = '\x1b[40m',
  RED = '\x1b[41m',
  GREEN = '\x1b[42m',
  YELLOW = '\x1b[43m',
  BLUE = '\x1b[44m',
  MAGENTA = '\x1b[45m',
  CYAN = '\x1b[46m',
  WHITE = '\x1b[47m',
}

export {
  COLOR,
  TEXT,
  HIGHLIGHT,
  underscore,
  hidden,
  blink,
  reverse,
  reset,
  spacedReset,
}
