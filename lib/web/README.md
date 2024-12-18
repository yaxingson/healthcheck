# @healthcheck/web [![npm version](https://img.shields.io/npm/v/@healthcheck/web.svg?style=flat-square)]() [![Download](https://img.shields.io/npm/dm/@healthcheck/web)]()

## Install

```shell
> npm i @healthcheck/web --save

```

## Usage

Global import:

```js
import Healthcheck '@healthcheck/web'

new Healthcheck({})

```

Vite plugin:

```js
// vite.config.js
import { defineConfig } from 'vite'
import { vitePluginHealthcheck } from '@healthcheck/web'

export default defineConfig({
  // ...
  plugins:[ vitePluginHealthcheck({}) ]

})

```

Webpack plugin:

```js
// webpack.config.js
import { HealthcheckWebpackPlugin } from '@healthcheck/web'

export default {
  plugins:[
    new HealthcheckWebpackPlugin({})
  ]  

}

```

## Configuration
