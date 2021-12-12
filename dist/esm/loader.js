import { p as promiseResolve, b as bootstrapLazy } from './index-6b8dd737.js';

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["v-header",[[1,"v-header",{"brand":[1],"open":[32]}]]]], options);
  });
};

export { defineCustomElements };
