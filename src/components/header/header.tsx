/*
 *  Header component with logo, navbar & social icons.
 *  Created On 12 December 2021
 */

import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'v-header',
})
export class Header {
    @Prop() brand: string

    render() {
        return (
            <header>
                <h2>{this.brand}</h2>
            </header>
        )
    }
}
