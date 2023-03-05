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
                'slate-1000': '#050d20',
            },
            backgroundImage: {
                dots: 'radial-gradient(rgba(255, 255, 255, 0.2) 5%, transparent 0)'
            },
            backgroundSize: {
                'size-dots': '35px 35px'
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