#!/usr/bin/env node
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync, statSync } from 'node:fs'
import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const __dirname = dirname(fileURLToPath(import.meta.url))

const inputOptions = {
  input:resolve(__dirname, '../lib/web/src/index.ts'),
  plugins:[
    typescript()
  ]
}

const outputOptions = [
  {
    file:resolve(__dirname, '../lib/web/dist/index.js'),
    format:'esm'
  },
  {
    file:resolve(__dirname, '../lib/web/dist/index.min.js'),
    format:'esm',
    plugins:[terser()]
  }
]

async function build(inputOptions, outputOptions) {
  try {
    const bundle = await rollup(inputOptions)
    
    for(const outputOption of outputOptions) {
      await bundle.write(outputOption)
    }
  } catch(e) {
    throw e
  }
}

build(inputOptions, outputOptions)

