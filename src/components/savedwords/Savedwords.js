import React from 'react'
import '../../pages/dashboard/Dashboard.css'
import {MdDelete} from 'react-icons/md'
function Savedwords({savedword,savedmeaning}) {
    return (
        <div>
         <div className="savedbox">
         <h3>{savedword}</h3>
         <p>{savedmeaning}</p>
         <MdDelete className="dltbtn"/>
         </div>
        </div>
    )
}

export default Savedwords
