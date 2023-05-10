import { clearLine, cursorTo } from 'readline'
import { cli } from './cli'
import { reset, spacedReset, TEXT } from './colors'
import { FORMAT } from './format'
import { settings } from './init'
import { sleep } from './util'

const CONSOLE_SPACING = ' '.repeat(3)

const warn = (title: string, message: string) => {
  const fancyTitle =
    FORMAT.HIGHLIGHT.WARN +
    ' ' +
    settings.programName +
    '_WARNING:' +
    spacedReset +
    ' \n' +
    FORMAT.HIGHLIGHT.WARN +
    ' ' +
    title +
    spacedReset
  log(fancyTitle, true)
  log(FORMAT.WARN + message + FORMAT.DEFAULT, true)
}

let bufferActive = false
let bufferPromise: Promise<any>

const logHold = async (promise: Promise<any>) => {
  bufferActive = true
  bufferPromise = promise
  await promise
  bufferActive = false
  return writeLogBuffer()
}

/**
 * log function
 * @param str
 */
const log = (str: string, noSpacing?: boolean, bufferOverride?: boolean) => {
  if (bufferActive && bufferOverride !== true) addToLogBuffer(str, noSpacing)
  else {
    const splitlines = str.split('\n')
    splitlines.forEach((line, i) => {
      if (line.length > settings.width) {
        splitlines.splice(i, 1, ...lineLimit(line, settings.width))
      }
    })
    // str = splitlines.join('\n')
    // this is really hard to do accounting for escape characters...
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
  const str = FORMAT.MAJOR.trim() + char.repeat(settings.width) + reset + '\n'
  clearLine(process.stdout, 0)
  cursorTo(process.stdout, 0)
  process.stdout.write(str)
  return str
}

interface loggable {
  message: string
  skipSpacing?: boolean
}

const logBuffer: Array<loggable> = []

const addToLogBuffer = async (str: string, skipSpacing?: boolean) => {
  logBuffer.push({
    message: str,
    skipSpacing: skipSpacing,
  })
}

export const writeLogBuffer = async () => {
  for (; logBuffer.length > 0; ) {
    const l = logBuffer.splice(0, 1)[0]
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

export {
  warn,
  log,
  logBar,
  addToLogBuffer,
  logHold,
  bufferActive,
  bufferPromise,
}
