'use strict'

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const util = require('util');

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;

    if (!options.isServer) {
      console.log('client loaders');
      config.module.rules.push({
        test: /\.(js|cjs|mjs)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
        }
      });

      // console.log('config.module.rules', util.inspect(config.module.rules[3], {showHidden: true, depth: null, colors: true}));
    } else {
      // console.log('server loaders');
      // console.log(defaultLoaders);
      config.module.rules.push({
        test: /\.(js|cjs|mjs)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
        }
      });
    }

    return config
  },
});
