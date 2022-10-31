import { sleep } from './util'

const JESTER_SMUG =
  '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡¬‿¬  )'
const JESTER_HAH =
  '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡ᵔ́∀ᵔ̀  )'
const JESTER_DUM =
  '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡´･ᗝ･`)'
const JESTER_LENNY =
  '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡° ͜ʖ ͡°)'

export const jesterAnim = async () => {
  await sleep(700)
  process.stdout.write(JESTER_SMUG)
  await sleep(500)
  process.stdout.write('\n   JESTER')
  await sleep(300)
  for (let i = 0; i < 3; i++) {
    process.stdout.write('?')
    await sleep(500)
  }
  await sleep(500)
  process.stdout.moveCursor(0, -5)
  process.stdout.cursorTo(0)
  process.stdout.write(JESTER_HAH)
  process.stdout.moveCursor(-10, 1)
  process.stdout.clearLine(0)
  process.stdout.write('HAH!')
  await sleep(1500)
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)
  process.stdout.write('I hardly ')
  await sleep(600)
  process.stdout.moveCursor(0, -5)
  process.stdout.cursorTo(0)
  process.stdout.write(JESTER_DUM)
  process.stdout.moveCursor(-4, 1)
  process.stdout.write('KNOW')
  await sleep(700)
  process.stdout.write(' her!')
  await sleep(1000)
  process.stdout.moveCursor(0, -5)
  process.stdout.cursorTo(0)
  process.stdout.write(JESTER_LENNY)
  process.stdout.moveCursor(0, 1)
  process.stdout.cursorTo(0)
  process.stdout.write('\n')
  await sleep(1000)
}
