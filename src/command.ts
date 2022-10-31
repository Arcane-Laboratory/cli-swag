interface command {
  name: string
  aliases?: Array<string>
  callback: () => Promise<boolean>
  description?: string
  minArgs?: number
  maxArgs?: number
}

const helpCommand: command = {
  name: 'help',
  aliases: ['cmds'],
  description: 'displays a list of commands',
  callback: async () => {
    const helpText = [`I'm here to help!`]
    commands.forEach((command) =>
      helpText.push(
        command.name + command.description ? ` - ${command.description}` : ''
      )
    )
    console.log(helpText.join('\n'))
    return true
  },
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

const commands: Array<command> = [helpCommand]

const addCommand = (command: command) => {
  commands.push(command)
}
const addCommands = (commandArray: Array<command>) => {
  commandArray.forEach((command) => commands.push(command))
}

export { command, commands, usageInfo, addCommand, addCommands }
