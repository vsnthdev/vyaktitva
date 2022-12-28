/*
 *  PostCSS configuration file for vyaktitva.
 *  Created On 28 December 2022
 */

module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: {
            config: './tailwind.web.config.cjs'
        }
    }
}