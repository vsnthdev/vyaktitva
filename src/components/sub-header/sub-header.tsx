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
            <div class={`${this.styled && 'v-font-medium v-border-b v-border-slate-200 v-bg-white/[0.85] v-backdrop-blur-xl dark:v-text-white dark:v-border-slate-700 dark:v-bg-slate-800/90'}`}>
                <div class="v-container v-mx-auto v-px-7 v-py-5 v-flex">
                    <div class="v-hidden v-font-semibold v-mr-5 md:v-flex">
                        <span>{this.brand}</span>
                    </div>
                    <slot/>
                </div>
            </div>
        )
    }
}
