import React,{useEffect,useState,useContext} from 'react'
import './Dashboard.css'
import Axios from 'axios'
import {AuthContext} from '../../context/AuthProvider'
import Savedwords from '../../components/savedwords/Savedwords'
function Dashboard() {
   const [words,setWords] = useState([])
   const {authuser} = useContext(AuthContext)
   useEffect(() => {
     Axios.get('https://dictionary-pwa-server.herokuapp.com/words').then((resp)=>{
      setWords(resp.data)
     })
   },[words])
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
                     wordid={eachword._id}
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
