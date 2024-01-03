import React, { useRef, useState } from 'react'
import './list.scss'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import ListItem from './ListItems/ListItem'

function List(props) {
    const listRef=useRef();
    const[slides,setSlides]=useState(0);
    const[ismoved,setIsmoved]=useState(false);
    const list=props.newlist

    const handleClick = (dir) =>{
        setIsmoved(true);
        let dist=listRef.current.getBoundingClientRect().x - 50; //current distance
        // console.log(listRef.current.getBoundingClientRect());
        if(dir === "left")
        {
            if(listRef.current.getBoundingClientRect().x>=0)
            {listRef.current.style.transform = `translateX(0px)`
            return ;}

            listRef.current.style.transform = `translateX(${230 + dist}px)`
            // console.log(dist);
        }
        else{
            if(dist<=-230*(list.content.length-6))
            {
                listRef.current.style.transform = `translateX(${-230*(list.content.length-6)}px)`
            return ;
            }
            listRef.current.style.transform = `translateX(${dist-230}px)`
            // console.log(listRef.current.getBoundingClientRect().x);
        }
    }


  return (
    <div className='list'>
    <span className='listTitle'>
        {list.title}
        </span>
        <div className='wrapper'>
        <ArrowBack className='slider left ' onClick={()=>handleClick("left")} style={{display : !ismoved && "none"}}/>
        <div className='container' ref={listRef}>
            {
                list.content.map((item,key)=>(
                    <ListItem index={key} item={item}/>
                ))
               
            }
        </div>
        <ArrowForward className='slider right' onClick={()=>handleClick("right")}/>
        </div>
    
    </div>

  )
}

export default List