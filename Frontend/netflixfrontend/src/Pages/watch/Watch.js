import React from 'react'
import './watch.scss'
import { ArrowBack } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
  const location=useLocation();
  console.log(location)
  return (
    <div className='watch'>
      <Link to='/'>
        <div className='back'>
        <ArrowBack />
        Home
        </div>
        </Link>
        {/* <video classname="video" autoPlay progress controls  src={location.state.movie.video}/> */}
        <iframe src={location.state.movie.video + "&autoplay=1"} title={location.state.movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
        {/* <iframe src={location.state.movie.video}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
        className='video'>

        </iframe> */}

    </div>
  )
}

export default Watch