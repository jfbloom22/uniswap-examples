const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'assert': require.resolve('assert/'),
    'http': require.resolve('stream-http'),
    'https': require.resolve('https-browserify'),
    'path': require.resolve('path-browserify'),
    'buffer': require.resolve('buffer/'),
    'fs': false, // fs is not available in the browser
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};