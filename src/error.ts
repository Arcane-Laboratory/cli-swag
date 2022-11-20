import { spacedReset, TEXT } from './colors'
import { FORMAT } from './format'
import { settings } from './init'
import { log } from './log'

class Err extends Error {
  public static count = 0
  constructor(public title: string, public message: string) {
    const fancyTitle =
      FORMAT.HIGHLIGHT.ERROR +
      ' ' +
      settings.programName +
      '_ERROR:' +
      spacedReset +
      ' \n' +
      FORMAT.HIGHLIGHT.ERROR +
      ' ' +
      title +
      spacedReset
    super('\n' + message)
    this.name = fancyTitle.trim()
    Err.count++
  }
  public log(bufferOverride?: boolean) {
    log('', false, bufferOverride)
    log(this.name + ': ' + this.message.trim(), true, bufferOverride)
  }
}
export { Err }
