/*
 *  Footer component with links to different pages.
 *  Created On 13 December 2021
 */

import { Component, Prop, h } from "@stencil/core"

@Component({
    tag: 'v-footer',
    styleUrl: '../../index.css'
})
export class Footer {
    @Prop() brand: string
    @Prop() styled: boolean = true

    render() {
        return (
            <footer class={this.styled && 'v-py-10 v-px-7 v-bg-white v-border-t v-border-slate-200 dark:v-bg-slate-800 dark:v-border-slate-700'}>
                <div class="v-flex v-flex-col v-container v-mx-auto v-font-body v-space-y-6 md:v-space-y-0 md:v-flex-row md:v-space-x-12">
                    {/* first section */}
                    <div class="v-flex v-flex-col">
                        {/* section header */}
                        <div class="v-w-full v-flex v-mb-3">
                            <span class="v-text-2xl v-font-semibold">{this.brand}</span>
                        </div>

                        {/* navigation links */}
                        <nav class="v-flex v-space-x-4 v-font-medium">
                            <a href="https://vasanthdeveloper.com/privacy">Privacy Policy</a>
                            <a href="https://vasanthdeveloper.com/contact">Contact Us</a>
                        </nav>
                    </div>

                    {/* projects section */}
                    <div class="v-flex v-flex-col v-justify-end">
                        {/* section header */}
                        <div class="v-w-full v-flex v-mb-3">
                            <span class="v-text-xl v-font-medium">Additional Links</span>
                        </div>

                        {/* navigation links */}
                        <nav class="v-flex v-font-medium">
                            <a class="v-mr-4" href="https://try.vsnth.dev" target="_blank" rel="noopener">Try Outs</a>
                            <a href="https://slides.vsnth.dev" target="_blank" rel="noopener">Slides</a>
                        </nav>
                    </div>
                </div>
            </footer>
        )
    }
}
