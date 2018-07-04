'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Imports                                                           |
// +-------+-------------------------------------------------------------------+

// Webpack plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack parts
// -----------------------------------------------------------------------------

// Base config

import commonConfig from './webpack.conf.common';

// Output

import output from './parts/output';

// Plugins

import miniCssExtractPlugin from './parts/plugins/mini-css-extract-plugin';

// Webpack utils
// -----------------------------------------------------------------------------

import utils from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Utils config                                                      |
// +-------+-------------------------------------------------------------------+

const RESOLVE = utils.resolve;
const CONTENTHASH = utils.contentHash;

// +-------+-------------------------------------------------------------------+
// | Title | Environments                                                      |
// +-------+-------------------------------------------------------------------+

const env = process.env.NODE_ENV;

// +-------+-------------------------------------------------------------------+
// | Title | Parts configs                                                     |
// +-------+-------------------------------------------------------------------+

// Output

const OUTPUT = output({
  filename: '[name]' + CONTENTHASH + '.js', // './'
  chunkFilename: () => {
    if (env === 'production') return '[name]' + CONTENTHASH + '.js' // './'
  },
  path: RESOLVE('dist'), // './'
});

// Plugins

const MCEP = miniCssExtractPlugin({
  filename: '[name]' + CONTENTHASH + '.css', // './'
});

// +-------+-------------------------------------------------------------------+
// | Title | Watching config                                                   |
// +-------+-------------------------------------------------------------------+

const watchConfig = new WebpackMerge([

  // +-----------+-------------------------------------------------------------+
  // | Title     | Output                                                      |
  // +-----------+-------------------------------------------------------------+
  // | Descr     |                                                             |
  // +-----------+-------------------------------------------------------------+
  // | Structure | output                                                      |
  // +-----------+-------------------------------------------------------------+

  OUTPUT,

  // +-------+-----------------------------------------------------------------+
  // | Title | Plugins                                                         |
  // +-------+-----------------------------------------------------------------+

  MCEP,
]);

// +-------+-------------------------------------------------------------------+
// | Title | Webpack config                                                    |
// +-------+-------------------------------------------------------------------+

const config = new WebpackMerge([ commonConfig, watchConfig ]);

// +-------+-------------------------------------------------------------------+
// | Title | Exports                                                           |
// +-------+-------------------------------------------------------------------+

export { OUTPUT, MCEP }

export default config;
