import React from 'react';
import { useNavigate } from 'react-router-dom'

function Card({dataItem}) {
  const Navigation = useNavigate()
  
  let  thumbnailYoutube= dataItem.snippet.thumbnails.high.url
  const titleYoutube= dataItem.snippet.title
  const channelTitleYoutube= dataItem.snippet.channelTitle
  return (
    <div onClick={()=>Navigation(`/playvideo/${dataItem.id}`)} className="p-5 transform transition duration-200 hover:scale-110 hover:rotate-2  ">  
   
        <div   className="max-w-sm rounded overflow-hidden shadow-md">    
            <img className="w-full object-fill  " src={thumbnailYoutube} alt="Mountain"/>
            <div className="px-6 py-4 bg-opacity-60 backdrop-filter backdrop-blur-lg  bg-white h-[100px]">
                <div className="font-bold md: text-sm ld: text-md mb-2 leading-4 h-auto line-clamp-2"> {titleYoutube} </div>
                <p className="text-gray-700 text-base">
                    { channelTitleYoutube}
                </p>
            </div>
     
        </div>
  </div>
  )
}

export default Card
