import { Component, Prop, h } from '@stencil/core'
import Helmet from '@stencil/helmet'

@Component({
    tag: 'v-head',
})
export class Head {
    @Prop() name: string
    @Prop() site: string = 'Vasanth Developer'
    @Prop() icon: string = 'https://res.cloudinary.com/vasanthdeveloper/image/upload/s--BTpbLVyE--/c_scale,w_256/v1628730745/vyaktitva/favicons/light.png'

    render() {
        return <Helmet>
            <title class="{this.name} — {this.site}">{this.name} — {this.site}</title>

            <link rel="shortcut icon" href={this.icon} type="image/png"/>
        </Helmet>
    }
}