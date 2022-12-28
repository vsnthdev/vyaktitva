/*
 *  TailwindCSS configuration file for this website.
 *  Created On 28 December 2022
 */

const vyaktitva = require('./tailwind.config.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/index.html"
    ],
    theme: vyaktitva.theme
}