import { clearLine, cursorTo } from 'readline'
import { cli } from './cli'
import { reset } from './colors'
import { FORMAT } from './format'
import { settings } from './init'
import { sleep } from './util'

let prog = ''

const initLogs = (programName: string) => {
  prog = programName
}

const warn = (title: string, message: string) => {
  const fancyTitle =
    FORMAT.HIGHLIGHT.WARN +
    prog +
    '_WARNING:' +
    reset +
    ' \n' +
    FORMAT.HIGHLIGHT.WARN +
    title +
    reset
  log(fancyTitle)
  log(message, true)
}

const error = (title: string, message: string) => {
  const fancyTitle =
    FORMAT.HIGHLIGHT.ERROR +
    prog +
    '_ERROR:' +
    reset +
    ' \n' +
    FORMAT.HIGHLIGHT.ERROR +
    title +
    reset
  log(fancyTitle)
  log(message, true)
}

let logHold = false

const cliFocus = async (promise: Promise<any>) => {
  logHold = true
  await promise
  logHold = false
  writeLogBuffer
}

/**
 * log function
 * @param str
 */
const log = (str: string, noSpacing?: boolean) => {
  if (logHold) addToLogBuffer(str, noSpacing)
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

export { initLogs, warn, error, log, logBar, addToLogBuffer }
