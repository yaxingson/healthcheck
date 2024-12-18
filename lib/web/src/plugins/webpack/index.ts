import { defaultHealthcheckOptions } from '../../constants'
import type { Compiler } from 'webpack'
import * as sources from 'webpack-sources'

class HealthcheckWebpackPlugin {
  constructor(private options=defaultHealthcheckOptions) {}

  apply(compiler:Compiler) {
    console.log('xx')

    compiler.hooks.emit.tapAsync('healthcheck', (compilation)=>{
      compilation.emitAsset('_healthcheck__web.html', new  sources.RawSource('xx'))

    })
  }
}

export default HealthcheckWebpackPlugin
