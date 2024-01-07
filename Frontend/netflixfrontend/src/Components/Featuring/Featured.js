import React, { useEffect, useState } from 'react'
import './featured.scss'
import { PlayCircleOutline, ReadMore } from '@mui/icons-material'
import madaari from './download (1).png'
import axios from 'axios'
const Featured = (props) => {
 // console.log(props.setGenre)

  const[content,setContent]=useState({});

  useEffect(()=>{

    const getRandomContent = async()=>{
      try{
        const res = await axios.get(`/movies/random${props.type != undefined ? "?type=" + props.type + (props.genre ? "&genre=" + props.genre : ""): ""}`,
        {
          headers: {
            token:
            " Bearer "+JSON.parse(localStorage.getItem('user')).accessToken,
          },
        })

        setContent(res.data[0]);
      }
      catch(err)
      {
        console.log(err);
      }
    }

    getRandomContent();
    
  },[props])

  return (
    <div className='featured'>
      {
        props.type && (
          <div className='category'>
            <span>
              {props.type === "movie" ? "Movies" : "Series"}
            </span>

            <select name="genre" id="genre" value={props.genre} onChange={(e)=>{
                props.setGenre(e.target.value)
            }}>
              <option  value="">All</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Historical">Historical</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
            </select>
            </div>
        )

      }
       <img src={content.img}/>
       <div className='info'>
        <img src={content.imgtitle}/>
        <span className='desc'>
          {content.description}
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayCircleOutline />
            <span>Play</span>
            </button>
          <button className='more'>
            <ReadMore />
            <span>Info</span></button>
        </div>
       </div>
    </div>
  )
}

export default Featured