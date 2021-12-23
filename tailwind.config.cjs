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
        colors: {
            slate: colors.slate,
            transparent: 'transparent',
            inherit: 'inherit',
            white: '#FFFFFF',
            brand: '#006cff'
        }
    },
    plugins: [],
}
