import React,{useContext} from 'react'
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../context/AuthProvider';
import Axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
function Login() {
    const {setAuthuser} = useContext(AuthContext)
    const clientid = "1075025569924-qm6pbpnqsq5n3mc0ipuu7biim5mvi5k6.apps.googleusercontent.com"
    const loginSuccess = (resp)=>{
     setAuthuser(resp.profileObj)
     Axios.post('https://dictionary-pwa-server.herokuapp.com/user',
       {
        email:resp.profileObj.email,
        googleId:resp.profileObj.googleId,
        name:resp.profileObj.name
    })
    .then((resp)=>{
        console.log(resp.data)
        if(resp.data.registermsg){
         toast(resp.data.registermsg)
        }
        if(resp.data.welcomemsg){
          toast(resp.data.welcomemsg)
        }
    })
    } 
    const loginFailure = ()=>{
     console.log('login failed')
    }
    return (
        <> 
        <ToastContainer/> 
        <div className="loginarea">
        <div className="loginbox">
            <GoogleLogin
            clientId={clientid}
            buttonText="Sign up with Google"
            cookiePolicy={'single_host_origin'}
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            isSignedIn={false} //will change
            className="loginbtn"
            />
        </div>
        </div>
        </>
    )
}

export default Login
