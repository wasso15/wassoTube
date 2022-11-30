import React, {useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { channelContext } from '../Service/wassoTubeContext';



function Card({dataItem}) {
    const { setDataVideo}= useContext(channelContext)
  const Navigation = useNavigate(); 
  const Localize= useLocation().pathname
  
  let  thumbnailYoutube= dataItem.snippet.thumbnails.high.url
  const titleYoutube= dataItem.snippet.title
  const channelTitleYoutube= dataItem.snippet.channelTitle; 
  let id  = dataItem.id;
  // 
      // if(Localize==='/channelVideo'){
      //     id= id.videoId
      // }
  const watchVideo= ()=>{
    
    setDataVideo(dataItem)
    Navigation(`/playvideo/${id}`); 
  }
  return (
    <div onClick={watchVideo} className="p-5 transform transition duration-200 hover:scale-110 hover:rotate-2  ">  
   
        <div   className="max-w-sm rounded overflow-hidden shadow-md">    
            <img className="w-full object-cover  " src={thumbnailYoutube} alt="Mountain"/>
            <div className="px-6 py-4 bg-opacity-60 backdrop-filter backdrop-blur-lg  bg-white h-[100px]">
                <div className="font-bold md: text-sm ld: text-[13px] mb-2 leading-4 h-auto line-clamp-2" dangerouslySetInnerHTML={{__html: titleYoutube}}  ></div>
                <p className="text-gray-700 text-[12px]" dangerouslySetInnerHTML={{__html: channelTitleYoutube}}>
                  
                </p>
            </div>
     
        </div>
  </div>
  )
}

export default Card
