const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
console.log(BrowserSyncPlugin);


module.exports = {
    entry: {
      app: './src/main.js'
    },
  
   output: {
      filename: 'bundler.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist'
    },

    watch: true,

    watchOptions: {
        ignored: /node_modules/
    },

    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['./dist'] }
        })
    ]
}