import { p as promiseResolve, b as bootstrapLazy } from './index-b284e222.js';

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
  return bootstrapLazy([["v-header",[[1,"v-header",{"brand":[1]}]]]], options);
});
