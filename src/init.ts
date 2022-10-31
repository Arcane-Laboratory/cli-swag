import { HIGHLIGHT_COLOR, TEXT_COLOR } from './colors'
import { coloredLogs, enableColoredLogs } from './format'

interface cliSettings {
  format?: cliColorLayout
  width?: number
  prompt?: string
  promptConfirm?: string
  promptReject?: string
  programName?: string
}
interface cliColorLayout {
  DEFAULT: TEXT_COLOR
  MAJOR: TEXT_COLOR
  MINOR: TEXT_COLOR
  HIGHLIGHT: {
    DEFAULT: HIGHLIGHT_COLOR
    MAJOR: HIGHLIGHT_COLOR
    WARN?: HIGHLIGHT_COLOR
    ERROR?: HIGHLIGHT_COLOR
  }
}

const defaultFormat: cliColorLayout = {
  DEFAULT: TEXT_COLOR.reset,
  MAJOR: TEXT_COLOR.green,
  MINOR: TEXT_COLOR.dim,
  HIGHLIGHT: {
    DEFAULT: HIGHLIGHT_COLOR.BGwhite,
    MAJOR: HIGHLIGHT_COLOR.BGgreen,
  },
}

let settings = {
  format: defaultFormat,
  width: 80,
  colorLog: true,
  prompt: '|>',
  promptConfirm: '|=> ',
  promptReject: '|-|',
  programName: '',
}

const initializeCLI = (userSettings: cliSettings) => {
  Object.keys(userSettings).forEach(
    (key) => (settings[key] = userSettings[key])
  )
  if (coloredLogs) enableColoredLogs(settings.format)
}

export { initializeCLI, settings, cliSettings, cliColorLayout }
