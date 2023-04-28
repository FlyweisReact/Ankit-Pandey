import React, { useState } from 'react'
import Navbar from './Homepage/Navbar/Navbar'
import Sidebar from './Homepage/Sidebar/Sidebar'
import './HOC.css'

const HOC = (Wcomponent) => {
    return function Component() {
        const [width, setWidth] = useState(false)
        return (
            <>

                <div className="flex">

                    <Sidebar width={width} className />

                    <div style={{ width: "100%", }}>
                        <Navbar width={width} setWidth={setWidth} />
                        <div className="wcom">
                            <Wcomponent /></div>
                    </div></div>

            </>
        )
    }
}

export default HOC
