import { p as promiseResolve, b as bootstrapLazy } from './index-0d6fa7ea.js';

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["v-header",[[0,"v-header",{"brand":[1]}]]]], options);
});
