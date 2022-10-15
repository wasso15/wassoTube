import React from 'react'
import { useParams } from 'react-router-dom'; 
import YouTube from 'react-youtube';
import FoooterPlayList from '../Component/FoooterPlayList';


function VideoPlayer() {

    let {id} =  useParams();
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
      autoplay: 1,
      },
    };
  
  return (
    <div className='pt-24  m-auto w-[45%] flex  flex-col '>
    <YouTube videoId={id} opts={opts}/>
    <FoooterPlayList/>
    </div>
  )
}

export default VideoPlayer
