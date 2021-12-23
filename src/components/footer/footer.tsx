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

    render() {
        return (
            <footer class={"py-10 px-7"}>
                <div class="container mx-auto font-body font-semibold">
                    <div class="w-full flex mb-3">
                        <span class="text-2xl">{this.brand}</span>
                    </div>

                    {/* footer navigation */}
                    <nav class="flex space-x-4">
                        <a href="https://vasanthdeveloper.com/privacy">Privacy Policy</a>
                        <a href="https://vasanthdeveloper.com/contact">Contact Us</a>
                    </nav>
                </div>
            </footer>
        )
    }
}
