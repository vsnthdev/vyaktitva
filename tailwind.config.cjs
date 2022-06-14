const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'v-',
    darkMode: 'class',
    content: [
        './src/components/**/*.tsx',
        './src/index.html'
    ],
    theme: {
        fontFamily: {
            sans: [
                'Basically A Sans Serif',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
            ]
        },
        extend: {
            colors: {
                primary: '#006cff'
            }
        }
    }
}
