/*
 *  TailwindCSS configuration file for vyaktitva.
 *  Created On 28 December 2022
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
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
            ],
            content: [
                'Plus Jakarta Sans',
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
                primary: '#006cff',
                undertone: {
                    50: '#f3f5fc',
                    100: '#e7ecf7',
                    200: '#c9d6ee',
                    300: '#99b5e0',
                    400: '#638ecd',
                    500: '#3f6fb8',
                    600: '#2e579b',
                    700: '#26467e',
                    800: '#233d69',
                    900: '#223458',
                    950: '#0a0f1a',
                },
            },
            keyframes: {
                faceIn: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                },
            },
            animation: {
                faceIn: 'faceIn 250ms ease-in forwards',
            }
        },
    }
}