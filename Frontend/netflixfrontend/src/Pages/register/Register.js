import React, { useState } from 'react'
import './register.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Register = () => {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [username,setUsername]=useState("");
    const[moveToPass,setMoveToPass]=useState(false);
    const navigate=useNavigate();

    const handleGetStarted = () =>{
        !email ?  setMoveToPass(false) : setMoveToPass(true);
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        try{
        if(pass && username)
        {
            await axios.post("auth/register",{"username":username,"password":pass, "email":email})
        }
        navigate('/login')
    }
    catch(err)
    {
        console.log(err)
    }
        // !email ?  setMoveToPass(false) : setMoveToPass(true);
    }

  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
            <img src='c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms-removebg-preview.png' className='logo' alt="Netflix background"/>

            <button className='loginbutton' onClick={()=>{
                navigate('/login')
            }}>Sign In</button>
        </div>
        </div>

        <div className='container'>
            <h1>
                Unlimited Movies, Series and many more.
            </h1>
            <h2>
                Watch Anywhere. Cancel Anytime.
            </h2>
            <p>
                Ready to watch? Enter your Email to create or restart Membership
            </p>
            { (!moveToPass) ? (
            <div className='input'>
            <input type='email' className='email' placeholder='E-Mail Address' value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            
            <button className='registerButton' onClick={handleGetStarted}> Get Started
                </button>
                </div>
                )
                :
                (
                    <form className='input'>
                         <input type='text' className='email' placeholder='username' value={username} onChange={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                    <input type='password' className='email' placeholder='Password' value={pass} onChange={(e)=>{
                        setPass(e.target.value);
                    }}/>
                   
                    <button className='registerButton' onClick={handleRegister}>Start
                        </button>
                        </form> 
                )
                }
                
        </div>
        </div>
  )
}

export default Register