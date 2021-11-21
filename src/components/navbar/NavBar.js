import React,{useContext} from 'react'
import './NavBar.css'
import {AuthContext} from '../../context/AuthProvider'
import {BsBookmarksFill,BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
function NavBar() {
    const {authuser} = useContext(AuthContext)
    return (
        <>
        <div className="navbar">
        {(authuser.googleId)?<>
         <h3>👋 Hello {authuser.givenName}</h3>
        </>:<></>}
        <nav>
        <ul>
        <Link to="/" style={{textDecoration:"none"}}>
        <li><BsSearch/></li></Link>
        <Link to="/dashboard" style={{textDecoration:"none"}}>
        <li><BsBookmarksFill/></li></Link>
        </ul>
        </nav>
        </div>
        </>
    )
}

export default NavBar
