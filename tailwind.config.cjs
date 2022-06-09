const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        './src/components/**/*.tsx',
        './src/index.html'
    ],
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif']
        },
        extend: {
            colors: {
                brand: '#006cff'
            }
        }
    },
    plugins: [],
}
