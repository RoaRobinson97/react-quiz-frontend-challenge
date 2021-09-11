const path = require('path')
const {when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES} = require('@craco/craco')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {},
  },
  typescript: {
    enableTypeChecking: true,
  },
  devServer: {},
  plugins: [
    {
      plugin: require('autoprefixer'),
    },
    {
      plugin: require('craco-alias'),
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
}
