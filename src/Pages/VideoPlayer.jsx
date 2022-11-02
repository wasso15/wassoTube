import React from 'react'
import { useParams } from 'react-router-dom'; 
import YouTube from 'react-youtube';
import FoooterPlayList from '../Component/FoooterPlayList';


function VideoPlayer() {

    let {id} =  useParams();
    const url=`https://www.youtube.com/embed/${id}`
  
  return (
    <div className='pt-24  m-auto w-[100%] flex flex-col items-center  '>
      
      <div className='aspect-w-16 aspect-h-9 md:aspect-h-2  w-[90%]   md:w-[50%] md:h-[400px] border'>
            <iframe frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="390" src={url}></iframe> 
      </div>


       <FoooterPlayList/>
  </div>
  

  )
}

export default VideoPlayer
