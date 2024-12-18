import { resolve } from 'node:path'
import { HealthcheckWebpackPlugin } from '@healthcheck/web'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry:'./src/index.ts',
  output:{
    filename:'index.js',
    path:resolve('output')
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:['ts-loader']
      }
    ]
  },
  mode:'none',
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      inject:'head',

    }),
    new HealthcheckWebpackPlugin()
  ]
}

