import { Config } from '@stencil/core'

export const config: Config = {
    namespace: 'vyaktitva',
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null
        },
        {
            type: 'dist',
        }
    ]
}