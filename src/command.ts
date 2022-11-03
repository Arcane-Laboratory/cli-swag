import { jesterCommand } from './animation'
import { Err } from './error'
import { FORMAT } from './format'
import { log, warn } from './log'

interface command {
  name: string
  aliases?: Array<string>
  callback: () => Promise<any>
  description?: string
  minArgs?: number
  maxArgs?: number
}

const helpCommand: command = {
  name: 'help',
  aliases: ['cmds'],
  description: 'displays a list of commands',
  callback: async () => {
    const helpText = [`There are ${commands.length} commands available to use:`]
    commands.forEach((command, i) => {
      helpText.push(
        `${FORMAT.MAJOR.trim()}${command.name}${FORMAT.DEFAULT.trim()}${
          command.description ? ` - ${command.description}` : ''
        }`
      )
      if (command.aliases && command.aliases.length > 0)
        helpText.push(
          `${FORMAT.MINOR.trim()}  aka: ${command.aliases.join(
            ', '
          )}${FORMAT.DEFAULT.trim()}`
        )
    })
    log(helpText.join('\n  '))
    return true
  },
}

const errTest: command = {
  callback: async () => {
    warn('Test Warning', 'this warning is for checking formatting, etc.')
    new Err('Test Error', 'this warning is for checking formatting, etc.').log()
    return
  },
  name: 'error',
  aliases: ['warn', 'testError'],
  description: 'display a test warning and a test error message',
}

const usageInfo = (command: command): string => {
  const { name, aliases, description, maxArgs, minArgs } = command
  const str = [name]
  if (description) str.push(description)
  if (aliases && aliases.length > 0) {
    const aliasInfo = ['aliases: ']
    aliases.forEach((alias) => aliasInfo.push(alias))
    str.push(aliasInfo.join(', '))
  }
  if (minArgs || maxArgs) {
    let argString = 'accepts '
    if (minArgs) {
      argString += minArgs.toString()
      if (maxArgs) argString += ' - '
    }
    if (maxArgs) argString += maxArgs.toString()
    argString += ' arguments'
    str.push(argString)
  }
  return str.join('\n  ')
}

const commands: Array<command> = [helpCommand, jesterCommand, errTest]

const addCommand = (command: command) => {
  commands.push(command)
}
const addCommands = (commandArray: Array<command>) => {
  commandArray.forEach((command) => commands.push(command))
}

export { command, commands, usageInfo, addCommand, addCommands }
