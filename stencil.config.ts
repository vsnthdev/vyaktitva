import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import tailwindcss from 'tailwindcss'

export const config: Config = {
    namespace: 'vyaktitva',
    globalStyle: 'src/index.css',
    devServer: {
        reloadStrategy: 'pageReload'
    },
    plugins: [
        postcss({
            plugins: [tailwindcss]
        })
    ],
    outputTargets: [
        {
            type: 'www',
            serviceWorker: false,
            copy: [
                {
                    src: 'assets',
                    dest: 'assets',
                    warn: true
                }
            ]
        },
        {
            type: 'dist'
        }
    ]
}
