import React, { useContext,useState } from 'react'
import Axios from 'axios'
import '../../pages/wordsearch/WordSearch.css'
import {AuthContext} from '../../context/AuthProvider'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Word({meaning,word}) {
    const {authuser} = useContext(AuthContext)
    const [servermsg,setServermsg] = useState("")
    if(servermsg !== ""){
      toast.success(servermsg)
    }
    const addword = ()=>{
     Axios.post('https://dictionary-pwa-server.herokuapp.com/add',{word,meaning,useremail:authuser.email})
     .then((resp)=>{
      if(resp.data){
        setServermsg(resp.data.successmsg)
      }
     })
    }
    return (
        <>
        <ToastContainer/>
        <div className="meaningbox">
          <p>{meaning}</p>
            <BsFillBookmarkPlusFill className="add"
             onClick={addword}/>   
        </div>
        </>
    )
}

export default Word
