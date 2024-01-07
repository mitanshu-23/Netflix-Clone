import React, { useEffect, useState } from 'react'
import './listItem.scss'
import { Add, SmartDisplay, ThumbDown, ThumbUp } from '@mui/icons-material'
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ListItem = ({item, index}) => {
  const [isHovered, setIshovered] = useState(false);
  const [movie,setMovie] = useState({})
  const[isLoading, setisLoading]=useState(true);


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/watch', { state: { movie:movie} });
  }

  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get('/movies/find/'+item,{
          headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem('user')).accessToken,
          }
        })
        // console.log(res);
        setMovie(res.data);
        setisLoading(false);

        
      }
      catch(err)
      {
        console.log(err);
      }
    }

    getMovie();
  },[item])

  console.log(movie.trailer);

  return (
    <>
   
    <div className='listItem' onMouseEnter={()=>{
      setIshovered(true);
    }} onMouseLeave={()=>{
      setIshovered(false);
    }} style={{left: isHovered && ((index*225 - 50) + index*2.5)}} onClick={handleClick}>
      <img src={movie.thumb}/>

      { isHovered && ( <>
        <iframe src={movie.trailer + "&autoplay=1"} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='iteminfo'>
      <div className='icons'>
        <SmartDisplay className='icon'/>
        <Add className='icon'/>
        <ThumbUp className='icon'/>
        <ThumbDown className='icon'/>
      </div>
      <div className='iteminfotop'>
        <span>{movie.duration}</span>
        <span className='limit'>{movie.limit}</span>
        <span>{movie.year}</span>
      </div>
      <div className='desc'>
        {movie.description}
      </div>
      <div className='genre'>
        {movie.genre}
      </div>
      </div>
      </>
      )
}
      </div>

      </>
  )
}

export default ListItem