/*
 *  Header component with logo, navbar & social icons.
 *  Created On 12 December 2021
 */
import { Component, Prop, h } from "@stencil/core";
export class Header {
  render() {
    return (h("header", null,
      h("h2", null, this.brand)));
  }
  static get is() { return "v-header"; }
  static get properties() { return {
    "brand": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "brand",
      "reflect": false
    }
  }; }
}
