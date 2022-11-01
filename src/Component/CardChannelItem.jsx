import React from 'react'
import { useNavigate } from 'react-router-dom'


function CardChannelItem({dataItem}) {
    const Navigation = useNavigate()
    
  return (
    <div onClick={()=>Navigation(`/playvideo/${dataItem.id.videoId}`)} className="p-5 transform transition duration-200 hover:scale-110 hover:rotate-2  ">  
   
        <div   className="max-w-sm rounded overflow-hidden shadow-md">    
            <img className="w-full object-cover " src={dataItem.snippet.thumbnails.high.url} alt="Mountain"/>
            <div className="px-6 py-4 bg-opacity-60 backdrop-filter backdrop-blur-lg  bg-white h-[100px]">
                <div className="font-bold md: text-sm ld: text-md mb-2 leading-4 h-auto]"> {dataItem.snippet.title}  </div>
                <p className="text-gray-700 text-base">
                {dataItem.snippet.channelTitle}
                </p>
            </div>
     
        </div>
  </div>
  )
}

export default CardChannelItem