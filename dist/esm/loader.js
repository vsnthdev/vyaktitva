import { p as promiseResolve, b as bootstrapLazy } from './index-c43bfec8.js';

/*
 Stencil Client Patch Esm v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["v-footer_2",[[0,"v-footer",{"brand":[1],"theme":[1]}],[0,"v-header",{"brand":[1],"theme":[1],"open":[32]}]]]], options);
  });
};

export { defineCustomElements };
