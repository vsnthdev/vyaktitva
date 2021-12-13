const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './src/components/**/*.tsx',
        './src/index.html'
    ],
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif']
        },
        extend: {
            slate: colors.slate,
            transparent: 'transparent',
            brand: '#006cff'
        },
    },
    plugins: [],
}
