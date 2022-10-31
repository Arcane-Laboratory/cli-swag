import { clearLine, createInterface, Interface, moveCursor } from 'readline'
import { reset } from './colors'
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
    let foundCommand: command | undefined
    commands.forEach((cliCommand) => {
      if (cliCommand.name == line.trim()) {
        foundCommand = cliCommand
        return
      }
    })
    if (foundCommand) {
      await sleep(200)
      clearLine(process.stdout, 0)
      moveCursor(process.stdout, 0, -1)
      clearLine(process.stdout, 0)
      process.stdout.write(
        FORMAT.MAJOR + settings.promptConfirm + line + reset + '\n'
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
          FORMAT.MINOR +
          line +
          reset +
          '/n'
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
      reset +
      'CLI COMMANDS',
    true
  )
  return cli
}

export { runCLI, cli }
