import React , {useState} from 'react'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import FoooterPlayList from '../Component/FoooterPlayList';
import { channelContext } from '../Service/wassoTubeContext';
import Commentary from '../Component/Commentary';




function VideoPlayer() {
    
    const [relatedVideo, setRelatedVideo] = useState(); 
    const {dataVideo, socket}= useContext(channelContext);  
    
    let titleVideo= dataVideo.snippet.title;
    let descVideo= dataVideo.snippet.description; 
     let {id} =  useParams();

     const url=`https://www.youtube.com/embed/${id}?autoplay=1`; 
     
  
    useEffect(()=>{
      console.log(dataVideo.statistics.likeCount)
    
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=${id}&type=video&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
        .then(likedVideo =>{
            return likedVideo.json()
        })
        .then(datas =>
          {
          setRelatedVideo(datas.items)
        })
        
        if(dataVideo)
      {
        socket.emit('GetAllVideoComment', {id }); 
      }
      
    }, [])
      

  
  return (
    <div className='pt-[180px]  flex flex-col md:flex-row items-start justify-center m-auto gap-4  '>
      
      <div className='aspect-w-16 aspect-h-9 md:aspect-h-2 w-[90%] md:w-[50%] md:h-[400px]'>
            <iframe frameB  order="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="390" src={url}></iframe> 
      </div>

      <Commentary idVideo={id}/>

       {/* <FoooterPlayList datas={relatedVideo}/> */}
  </div>
  

  )
}

export default VideoPlayer
