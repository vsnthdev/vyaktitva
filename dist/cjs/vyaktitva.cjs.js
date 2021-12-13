'use strict';

const index = require('./index-ae7dfa36.js');

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('vyaktitva.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["v-footer_2.cjs",[[0,"v-footer",{"brand":[1],"theme":[1]}],[0,"v-header",{"brand":[1],"theme":[1],"open":[32]}]]]], options);
});
