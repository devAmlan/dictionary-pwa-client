import React,{useContext} from 'react'
import './Home.css'
import Login from '../../components/login/Login'
import WordSearch from '../wordsearch/WordSearch'
import {AuthContext} from '../../context/AuthProvider'

function Home() {
    const {authuser} = useContext(AuthContext)
    return (
        <div>
        <div className="mainarea">
         {(authuser.googleId)?<WordSearch/>:<Login/>}
        </div>
        </div>
    )
}

export default Home
