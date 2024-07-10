import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
function Root() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    )
}

export default Root
