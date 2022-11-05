import { COLOR, HIGHLIGHT, TEXT } from './colors'
import { addCommands, command } from './command'
import { enableColoredLogs } from './format'

interface cliSettings {
  color?: COLOR | false
  width?: number
  prompt?: string
  promptConfirm?: string
  promptReject?: string
  programName?: string
}
interface cliSettingsFull {
  color: COLOR | false
  width: number
  prompt: string
  promptConfirm: string
  promptReject: string
  programName: string
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

const defaultColor: COLOR = 'BLUE'
let settings: cliSettingsFull = {
  color: defaultColor,
  width: 65,
  prompt: '|> ',
  promptConfirm: '|=>',
  promptReject: '|-|',
  programName: '',
}

const initializeCLI = (
  userSettings: cliSettings,
  commands?: Array<command>
) => {
  Object.keys(userSettings).forEach(
    (key) => (settings[key] = userSettings[key])
  )
  if (userSettings.color != undefined && userSettings.color != false) {
    enableColoredLogs(userSettings.color)
    if (commands) addCommands(commands)
  }
}

export { initializeCLI, settings, cliSettings, cliColorLayout }
