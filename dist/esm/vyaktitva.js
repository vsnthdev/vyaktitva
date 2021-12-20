import { p as promiseResolve, b as bootstrapLazy } from './index-c43bfec8.js';

/*
 Stencil Client Patch Browser v2.12.0 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["v-footer_2",[[0,"v-footer",{"brand":[1],"theme":[1]}],[0,"v-header",{"brand":[1],"theme":[1],"open":[32]}]]]], options);
});
