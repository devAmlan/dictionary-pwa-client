import React from 'react'
import Home from '../home/Home'
import Dashboard from '../dashboard/Dashboard'
import NavBar from '../../components/navbar/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function Mainarea() {
    return (
        <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/dashboard"  element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Mainarea
