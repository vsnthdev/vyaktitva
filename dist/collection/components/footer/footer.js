/*
 *  Footer component with links to different pages.
 *  Created On 13 December 2021
 */
import { Component, Prop, h } from "@stencil/core";
export class Footer {
  constructor() {
    this.theme = "plain";
    this.getTheme = () => {
      if (this.theme == 'default') {
        return "bg-white text-gray-700 border-t-2";
      }
      else {
        return "";
      }
    };
  }
  render() {
    return (h("footer", { class: "py-10 px-7 " + this.getTheme() },
      h("div", { class: "container mx-auto font-body font-semibold" },
        h("div", { class: "w-full flex mb-3" },
          h("span", { class: "text-2xl" }, this.brand)),
        h("nav", { class: "flex space-x-4" },
          h("a", { href: "https://vasanthdeveloper.com/privacy" }, "Privacy Policy"),
          h("a", { href: "https://vasanthdeveloper.com/contact" }, "Contact Us")))));
  }
  static get is() { return "v-footer"; }
  static get originalStyleUrls() { return {
    "$": ["../../index.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../index.css"]
  }; }
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
    },
    "theme": {
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
      "attribute": "theme",
      "reflect": false,
      "defaultValue": "\"plain\""
    }
  }; }
}
