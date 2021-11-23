import React,{useContext} from 'react'
import './Home.css'
import Login from '../../components/login/Login'
import WordSearch from '../wordsearch/WordSearch'
import {AuthContext} from '../../context/AuthProvider'
import {AiFillHeart} from 'react-icons/ai'
function Home() {
    const {authuser} = useContext(AuthContext)
    return (
        <div>
        <div className="mainarea">
         {(authuser.googleId)?<WordSearch/>:<Login/>}
        </div>
        <div className="footer"><p>Devloped with <AiFillHeart style={{color:"#B91646"}}/> 
        by amlan</p></div>
        </div>
    )
}

export default Home
