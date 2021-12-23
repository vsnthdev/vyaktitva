/*
 *  Footer component with links to different pages.
 *  Created On 13 December 2021
 */

import { Component, Prop, h } from "@stencil/core"
import { join, getTheme } from '../../util/ui';

@Component({
    tag: 'v-footer',
    styleUrl: '../../index.css'
})
export class Footer {
    @Prop() brand: string
    @Prop() variant: string

    variants: Object = {
        footer: {
            default: 'bg-white text-slate-700 border-t-2'
        }
    }

    render() {
        return (
            <footer class={join([
                "py-10 px-7",
                getTheme(this.variant, this.variants, 'footer')
            ])}>
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
