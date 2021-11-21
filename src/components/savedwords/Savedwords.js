import React from 'react'
import '../../pages/dashboard/Dashboard.css'
import {MdDelete} from 'react-icons/md'
import Axios from 'axios'
function Savedwords({savedword,savedmeaning,wordid}) {
    const deleteword = (id)=>{
      Axios.get(`https://dictionary-pwa-server.herokuapp.com/dltword/${id}`)
      .then((resp)=>{
        console.log(resp.data)
      })
    }
    return (
        <div>
         <div className="savedbox">
         <div className="worddata">
         <h3>{savedword}</h3>
         <p>{savedmeaning}</p>
         </div>
         <div className="dltword">
         <MdDelete className="dltbtn" onClick={()=>{deleteword(wordid)}}/>
         </div>
         </div>
        </div>
    )
}

export default Savedwords
