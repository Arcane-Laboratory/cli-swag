import { clearLine, cursorTo } from 'readline'
import { cli } from './cli'
import { HIGHLIGHT, reset, spacedReset } from './colors'
import { FORMAT } from './format'
import { settings } from './init'
import { sleep } from './util'

const CONSOLE_SPACING = ' '.repeat(3)

const warn = (title: string, message: string) => {
  const fancyTitle =
    FORMAT.HIGHLIGHT.WARN +
    settings.programName +
    '_WARNING:' +
    spacedReset +
    ' \n' +
    FORMAT.HIGHLIGHT.WARN +
    title +
    spacedReset
  log(fancyTitle)
  log(message, true)
}

let bufferActive = false

const logHold = async (promise: Promise<any>) => {
  bufferActive = true
  await promise
  bufferActive = false
  return writeLogBuffer()
}

/**
 * log function
 * @param str
 */
const log = (str: string, noSpacing?: boolean) => {
  const splitlines = str.split('\n')
  splitlines.forEach((line, i) => {
    if (line.length > settings.width) {
      splitlines.splice(i, 1, ...lineLimit(line, settings.width))
    }
  })
  if (bufferActive) addToLogBuffer(str, noSpacing)
  else {
    if (!noSpacing)
      str = CONSOLE_SPACING + str.replace(/\n/g, '\n' + CONSOLE_SPACING)
    if (cli) {
      clearLine(process.stdout, 0)
      cursorTo(process.stdout, 0)
      console.log(str)
      cli.prompt()
    } else console.log(str)
  }
}

const logBar = (style: number) => {
  let char = ''
  switch (style) {
    case 0:
      char = '┼'
      break
    case 1:
      char = '─'
      break
    case 2:
      char = '═'
      break
    default:
      char = '+'
      break
  }

  const str = FORMAT.MAJOR + char.repeat(settings.width) + reset + '\n'
  clearLine(process.stdout, 0)
  cursorTo(process.stdout, 0)
  process.stdout.write(str)
  return str
}

interface loggable {
  message: string
  skipSpacing?: boolean
}

const initLogBuffer: Array<loggable> = []

const addToLogBuffer = async (str: string, skipSpacing?: boolean) => {
  initLogBuffer.push({
    message: str,
    skipSpacing: skipSpacing,
  })
}

export const writeLogBuffer = async () => {
  for (; initLogBuffer.length > 0; ) {
    const l = initLogBuffer.splice(0, 1)[0]
    await sleep(15)
    log(l.message, l.skipSpacing)
  }
}

export const lineLimit = (line: string, width): Array<string> => {
  const newLines: string[] = []
  for (let i = 0, charsLength = line.length; i < charsLength; i += width)
    newLines.push(line.substring(i, i + width))
  return newLines
}

export { warn, log, logBar, addToLogBuffer, logHold }
