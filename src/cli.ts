import { clearLine, createInterface, Interface, moveCursor } from 'readline'
import { reset, spacedReset } from './colors'
import { command, commands } from './command'
import { CHECK, colorCallout, FORMAT } from './format'
import { settings } from './init'
import { bufferActive, bufferPromise, log, logHold } from './log'
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

    const args = line.split(' ')
    const commandName = args.splice(0, 1)[0]
    commands.forEach((cliCommand) => {
      if (cliCommand.name == commandName) {
        foundCommand = cliCommand
        return
      }
      cliCommand.aliases?.forEach((alias) => {
        if (alias == commandName) foundCommand = cliCommand
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
      if (bufferActive)
        try {
          await bufferPromise
        } catch (err) {}
      await sleep(200)
      try {
        const callbackPromise = foundCommand.callback(args)
        await logHold(callbackPromise) // so that we wait for the logging to finish
        await callbackPromise // so that we can catch the error
      } catch (err) {
        console.log(err)
        if (foundCommand.description) console.log(foundCommand.description)
      }
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
  log(CHECK + 'LOADED' + colorCallout(commands.length) + 'CLI COMMANDS', true)
  return cli
}

export { runCLI, cli }
