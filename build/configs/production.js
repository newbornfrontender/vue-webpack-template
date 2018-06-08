'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = WEBPACK PARTS                                                             =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import dynamicCdnWebpackPlugin from './parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from './parts/plugins/mini-css-extract-plugin';

const plugins = (
  WebpackMerge([
    dynamicCdnWebpackPlugin,
    miniCssExtractPlugin({
      filename: 'main.css', // ?
    }),
  ])
);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default (
  WebpackMerge([
    plugins,
  ])
);