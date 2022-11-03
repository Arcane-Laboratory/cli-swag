import { clearLine, createInterface, Interface, moveCursor } from 'readline'
import { reset, spacedReset } from './colors'
import { command, commands } from './command'
import { CHECK, FORMAT } from './format'
import { settings } from './init'
import { log } from './log'
import { sleep } from './util'

let cli: Interface | undefined

/**
 * A function which initiates a command line parser for future functionality
 * @returns A command line parser which doesn't do anything... yet...
 */
const runCLI = () => {
  const prompt = FORMAT.MAJOR + settings.prompt + reset
  const promptConfirm = FORMAT.MAJOR + settings.promptConfirm + reset
  const promptReject = FORMAT.MAJOR + settings.promptReject + reset

  // initialize client-agnostic functionality with the first beaconConfig Recieved
  if (cli) return cli // should only run once
  cli = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: prompt,
  })

  cli.on('line', async (line) => {
    line = line.trim()
    let foundCommand: command | undefined
    if (line == '') {
      moveCursor(process.stdout, 0, -1)
      cli?.prompt()
      return
    }
    commands.forEach((cliCommand) => {
      if (cliCommand.name == line) {
        foundCommand = cliCommand
        return
      }
      cliCommand.aliases?.forEach((alias) => {
        if (alias == line) foundCommand = cliCommand
        return
      })
    })
    if (foundCommand) {
      await sleep(200)
      clearLine(process.stdout, 0)
      moveCursor(process.stdout, 0, -1)
      clearLine(process.stdout, 0)
      process.stdout.write(
        FORMAT.MAJOR + settings.promptConfirm + line + spacedReset + '\n'
      )
      await sleep(200)
      await foundCommand.callback()
      cli?.prompt()
    } else {
      clearLine(process.stdout, 0)
      moveCursor(process.stdout, 0, -1)
      clearLine(process.stdout, 0)
      process.stdout.write(
        FORMAT.MAJOR +
          settings.promptReject +
          FORMAT.MINOR.trim() +
          line +
          spacedReset +
          '\n'
      )
      log(`No command found '${line}'. Use 'help' for a list of commands`)
      cli?.prompt()
    }
  })
  log(
    CHECK +
      'CLI: LOADED' +
      FORMAT.HIGHLIGHT.MAJOR +
      commands.length +
      spacedReset +
      'CLI COMMANDS',
    true
  )
  return cli
}

export { runCLI, cli }
