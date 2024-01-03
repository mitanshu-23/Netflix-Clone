import React, { useContext, useState } from 'react'
import './login.scss'
import { AuthContext } from '../../Context/authContext/AuthContext';
import { login } from '../../Context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const {dispatch} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [pass,setPass] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (e)=>{
      e.preventDefault();
      if(email && pass)
      try{
          login({"email" : email, "password" : pass},dispatch)
          // navigate('/')
      }
      catch(err){
        console.log(err)
      }
  }



  return (
    <div className='login'>
    <div className='top'>
        <div className='wrapper'>
        <img src='c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms-removebg-preview.png' className='logo' alt="Netflix background"/>
    </div>
    </div>

    <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input className='email' type='email' placeholder='Email or Phone' onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <input className='password' type='password' placeholder='Password' onChange={(e)=>{
            setPass(e.target.value)
          }}/>
          <button className='loginButton' onClick={handleLogin}>Sign In</button>
          <span>New to Netfilx? <b>SignUp Now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
            <b> Learn More.</b>
          </small>
        </form>
    </div>
    </div>
)
  
}
