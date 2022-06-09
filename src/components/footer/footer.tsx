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
            <footer class={`py-10 px-7 ${this.styled && 'bg-white border-t border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
                <div class="flex flex-col container mx-auto font-body space-y-6 md:space-y-0 md:flex-row md:space-x-12">
                    {/* first section */}
                    <div class="flex flex-col">
                        {/* section header */}
                        <div class="w-full flex mb-3">
                            <span class="text-2xl font-semibold">{this.brand}</span>
                        </div>

                        {/* navigation links */}
                        <nav class="flex space-x-4 font-medium">
                            <a href="https://vasanthdeveloper.com/privacy">Privacy Policy</a>
                            <a href="https://vasanthdeveloper.com/contact">Contact Us</a>
                        </nav>
                    </div>

                    {/* projects section */}
                    <div class="flex flex-col justify-end">
                        {/* section header */}
                        <div class="w-full flex mb-3">
                            <span class="text-xl font-medium">Additional Links</span>
                        </div>

                        {/* navigation links */}
                        <nav class="flex font-medium">
                            <a class="mr-4" href="https://try.vsnth.dev" target="_blank" rel="noopener">Try Outs</a>
                            <a href="https://slides.vsnth.dev" target="_blank" rel="noopener">Slides</a>
                        </nav>
                    </div>
                </div>
            </footer>
        )
    }
}
