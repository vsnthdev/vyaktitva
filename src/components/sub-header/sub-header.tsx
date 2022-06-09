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
    @Prop() styled: boolean = true

    render() {
        return (
            <div class={`font-body ${this.styled && 'font-medium border-b border-slate-200 bg-white/[0.85] backdrop-blur-xl dark:text-white dark:border-slate-700 dark:bg-slate-800/90'}`}>
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
