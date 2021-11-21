import React, { useState } from 'react'
import './WordSearch.css'
import Axios from 'axios'
import Word from '../../components/word/Word'
import {ToastContainer,toast} from 'react-toastify'
function WordSearch() {
    const [word,setWord] = useState("")
    const [engword,setEngword] = useState("")
    const [meaning,setMeaning] = useState([])
    const searchbar = document.getElementById('searchbar')

    const getmeaning = ()=>{
    if(word !== ""){
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((resp)=>{
    // console.log(resp.data)
    setEngword(resp.data[0].word)
    setMeaning(resp.data[0].meanings)
    searchbar.value = ''
    setWord("")
   })
    .catch((err)=>{
    // console.log(err)
    toast.warning('Please enter a valid word')
    searchbar.value = ''
    setWord("")
    })
    }
    else{toast.warning('Please enter a valid word')}
   }
    return (
        <>
        <ToastContainer/>
         <div className="searcharea">
          <input type="text" className="searchbar" id="searchbar"
          onChange={(e)=>{setWord(e.target.value)}}/>
          <button onClick={getmeaning}>Search</button>
         </div>
         {
          (engword)?
          <h2 style={{textAlign:"center",color:"rgb(5, 150, 105)"}}>
          Word : {engword}</h2>:<></>
         }

         <div className="allmeanings">
         {
           meaning.map((eachmeaning)=>{
              return(
               <>
               <Word
               word={engword}
               meaning={eachmeaning.definitions[0].definition}
               />
               </>   
              ) 
           }) 
        }
         </div>
        </>
    )
}

export default WordSearch
