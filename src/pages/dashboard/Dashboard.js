import React,{useEffect,useState,useContext} from 'react'
import './Dashboard.css'
import Axios from 'axios'
import {AuthContext} from '../../context/AuthProvider'
import Savedwords from '../../components/savedwords/Savedwords'
function Dashboard() {
   const [words,setWords] = useState([])
   const {authuser} = useContext(AuthContext)
   useEffect(() => {
     Axios.get('http://localhost:3036/words').then((resp)=>{
      setWords(resp.data)
     })
   }, [])
    return (
        <>
        <div className="savedword">
         {
            words.map((eachword)=>{
                return(
                    <>

                    {
                      (eachword.useremail === authuser.email)?
                      <>
                     <Savedwords
                     savedword={eachword.word}
                     savedmeaning={eachword.meaning}
                     />
                      </>
                      :<>
                      </>  
                    }

                    </>
                )
            })
         }
       </div>
        </>
    )
}

export default Dashboard
