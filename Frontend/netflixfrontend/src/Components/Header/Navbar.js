import React, { useState } from 'react'
import './navbar.scss'
import { NotificationsActive, Person, Search} from '@mui/icons-material'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScroll, setScroll]=useState(false);

  console.log(window.pageYOffset);

  window.onscroll = () =>{
    setScroll(window.pageYOffset === 0 ? false : true);

    //cleanup
    return () => (window.onscroll = null); 
  }

  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
       <div className='container'>

       <div className='left'>
        <img src="c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms-removebg-preview.png" alt=""/>
        <Link to='/'  className="link"><span>Home</span></Link>
        <Link to='/series' className="link"><span className='navbarMainLinks'>Series</span></Link>
        <Link to='/movies' className="link"><span className='navbarMainLinks'>Movies</span></Link>
        <span>New and Popular</span>
        <span>My List</span>
       </div>


       <div className='right'>
       <Search className='icons'/>
       <span>KIDS</span>
       <NotificationsActive className='icons'/>
       <div className="profile">
       <Person className='icons'/>
       <div className='options'>
        <span>Settings</span>
        <span>Logout</span>
       </div>
       </div>
       </div>


       </div>
        


    </div>
  )
}

export default Navbar