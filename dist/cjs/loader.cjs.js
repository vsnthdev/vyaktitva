'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0c886a23.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["v-header.cjs",[[1,"v-header",{"brand":[1],"open":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
