import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import type { Plugin } from 'vite'
import { defaultHealthcheckOptions } from '../../constants'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default function vitePluginHealthcheck(options=defaultHealthcheckOptions):Plugin {
  return {
    name:'vite-plugin-healthcheck',
    async generateBundle(outputOptions, bundle, isWrite) {
      const code = await readFile(resolve(__dirname, '../src/_healthcheck__web.ejs'), 'utf-8')

      this.emitFile({
        type:'prebuilt-chunk',
        fileName:'_healthcheck__web.html',
        code
      })
    }
  }
}

