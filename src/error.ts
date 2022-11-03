import { spacedReset } from './colors'
import { FORMAT } from './format'
import { settings } from './init'

class Err extends Error {
  public static count = 0
  constructor(title: string, message: string) {
    const fancyTitle =
      FORMAT.HIGHLIGHT.ERROR +
      settings.programName +
      '_ERROR:' +
      spacedReset +
      ' \n' +
      FORMAT.HIGHLIGHT.ERROR +
      title +
      spacedReset
    super(fancyTitle)
    this.message = message
    Err.count++
  }
}
export { Err }
