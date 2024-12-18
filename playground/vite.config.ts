import { defineConfig } from 'vite'
import { vitePluginHealthcheck } from '@healthcheck/web'

export default defineConfig({
  plugins:[
    vitePluginHealthcheck()
  ]
})
