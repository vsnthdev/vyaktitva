/*
 *  Entrypoint for vyaktitva website.
 *  Created On 28 December 2022
 */

import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM
    .createRoot(
        document.querySelector('#app') as HTMLDivElement
    )
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )