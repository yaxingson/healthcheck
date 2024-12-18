# @healthcheck/web [![npm version](https://img.shields.io/npm/v/@healthcheck/web.svg?style=flat-square)]() [![Download](https://img.shields.io/npm/dm/@healthcheck/web)]() [![repo size](https://img.shields.io/bundlejs/size/@healthcheck/web)]()

## Features

- Monitor events such as resource requests, user behaviors, and route hops.
- Capture and report custom interface errors, code exceptions, and resource loading errors.
- Complete unit testing and end-to-end testing.
- Monitors the web performance in real time and reports the performance indicators.
- Rich hooks and configuration item support for high customization.
- Support for native web and mainstream front-end frameworks (e.g. vue, react, etc.).

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


## Screenshots

