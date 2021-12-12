/*
 *  Header component with logo, navbar & social icons.
 *  Created On 12 December 2021
 */

import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'v-header',
    styleUrl: 'header.css',
    shadow: true
})
export class Header {
    @Prop() brand: string

    render() {
        return (
            <header>
                <h2 class="font-body">{this.brand}</h2>
            </header>
        )
    }
}
