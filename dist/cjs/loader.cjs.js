'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ae7dfa36.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["v-footer_2.cjs",[[0,"v-footer",{"brand":[1],"theme":[1]}],[0,"v-header",{"brand":[1],"open":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
