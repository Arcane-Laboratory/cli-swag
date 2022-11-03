import { COLOR, HIGHLIGHT, TEXT } from './colors'
import { coloredLogs, enableColoredLogs } from './format'

interface cliSettings {
  color: COLOR
  width?: number
  prompt?: string
  promptConfirm?: string
  promptReject?: string
  programName?: string
}
interface cliColorLayout {
  DEFAULT: TEXT
  MAJOR: TEXT
  MINOR: TEXT
  HIGHLIGHT: {
    DEFAULT: HIGHLIGHT
    MAJOR: HIGHLIGHT
    WARN?: HIGHLIGHT
    ERROR?: HIGHLIGHT
  }
}

const defaultColor: COLOR = 'GREEN'
let settings = {
  color: defaultColor,
  width: 70,
  prompt: '|> ',
  promptConfirm: '|=>',
  promptReject: '|-|',
  programName: '',
}

const initializeCLI = (userSettings: cliSettings) => {
  Object.keys(userSettings).forEach(
    (key) => (settings[key] = userSettings[key])
  )
  if (coloredLogs) enableColoredLogs(settings.color)
}

export { initializeCLI, settings, cliSettings, cliColorLayout }
