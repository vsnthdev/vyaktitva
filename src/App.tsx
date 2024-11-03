/*
 *  Contains a React application.
 *  Created On 28 December 2022
 */

import React, { useState } from 'react'
import { Header, Footer, CmdK } from './lib/index'

const App = () => {
    const [open, setOpen] = useState(false)

    return <>
        <Header brand='vyaktitva' />
        <Footer />
        <CmdK open={open} setOpen={setOpen} />
    </>
}

export default App
