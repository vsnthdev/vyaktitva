import { r as registerInstance, h } from './index-0d6fa7ea.js';

let Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", null, h("h2", null, this.brand)));
  }
};

export { Header as v_header };
