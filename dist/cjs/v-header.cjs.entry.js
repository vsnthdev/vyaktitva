'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8f754c98.js');

let Header = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("header", null, index.h("h2", null, this.brand)));
  }
};

exports.v_header = Header;
