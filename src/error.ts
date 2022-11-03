import { spacedReset } from './colors'
import { FORMAT } from './format'
import { settings } from './init'
import { log } from './log'

class Err extends Error {
  public static count = 0
  constructor(title: string, message: string) {
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
    log(this.name, true, bufferOverride)
    log(this.message.substring(1).trim(), true, bufferOverride)
  }
}
export { Err }
