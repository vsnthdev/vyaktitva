/*
 *  A sub-header string that can display a custom content.
 *  Created On 20 December 2021
 */

import { Component, Prop, h } from "@stencil/core"

@Component({
    tag: 'v-sub-header',
    styleUrl: '../../index.css'
})
export class SubHeader {
    @Prop() brand: string
    @Prop() theme: string = 'plain'
    @Prop() shadow: boolean = false

    getTheme = (border: string) => {
        if (this.theme == 'default') {
            return " bg-white text-slate-700 " + border
        } else {
            return ""
        }
    }

    render() {
        return (
            <div class={"font-body " + this.getTheme(this.shadow ? 'shadow-xl' : "border-b-2") }>
                <div class={"container mx-auto px-7 py-5 flex"}>
                    <div class="hidden font-semibold mr-5 md:flex">
                        <span>{this.brand}</span>
                    </div>
                    <slot/>
                </div>
            </div>
        )
    }
}
