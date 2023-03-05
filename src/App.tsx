/*
 *  Contains a React application.
 *  Created On 28 December 2022
 */

import React from 'react'
import { Header, Footer, KBar, KBarProvider, actions } from './lib/index'

const App = () => {
    return <KBarProvider actions={actions}>
        <Header brand='vyaktitva' />
        <Footer />
        <KBar />
    </KBarProvider>
}

export default App
