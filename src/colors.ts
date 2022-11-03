const underscore = '\x1b[4m'
const blink = '\x1b[5m'
const reverse = '\x1b[7m'
const hidden = '\x1b[8m'
const reset = '\x1b[0m'
const spacedReset = ` ${reset} `

enum TEXT_COLOR {
  black = '\x1b[30m',
  red = '\x1b[31m',
  green = '\x1b[32m',
  yellow = '\x1b[33m',
  blue = '\x1b[34m',
  magenta = '\x1b[35m',
  cyan = '\x1b[36m',
  white = '\x1b[37m',
  reset = '\x1b[0m',
  bright = '\x1b[1m',
  // dim = '\x1b[2m',
  dim = '\x1b[30m',
}

enum HIGHLIGHT_COLOR {
  BGblack = '\x1b[40m',
  BGred = '\x1b[41m',
  BGgreen = '\x1b[42m',
  BGyellow = '\x1b[43m',
  BGblue = '\x1b[44m',
  BGmagenta = '\x1b[45m',
  BGcyan = '\x1b[46m',
  BGwhite = '\x1b[47m',
}

export {
  TEXT_COLOR,
  HIGHLIGHT_COLOR,
  underscore,
  hidden,
  blink,
  reverse,
  reset,
  spacedReset,
}
