import React,{useContext} from 'react'
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../context/AuthProvider';
import './Login.css'
function Login() {
    const {setAuthuser} = useContext(AuthContext)
    const clientid = "1075025569924-b9ic6uktt3sli8a5tg23ac5aaki43j2p.apps.googleusercontent.com"
    const loginSuccess = (resp)=>{
     setAuthuser(resp.profileObj)
    } 
    const loginFailure = ()=>{
     console.log('login failed')
    }
    return (
        <>  
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
