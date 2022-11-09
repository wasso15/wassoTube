import React , {useState} from 'react'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import FoooterPlayList from '../Component/FoooterPlayList';
import { channelContext } from '../Service/wassoTubeContext';
import { MdThumbUp, MdThumbDown } from "react-icons/md";




function VideoPlayer() {
    
    const [relatedVideo, setRelatedVideo] = useState(); 
    const {dataVideo}= useContext(channelContext);  
    

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
      
    }, [])
      

  
  return (
    <div className='pt-24  flex flex-col md:flex-row  items-center justify-center m-auto gap-4 '>
      
      <div className='aspect-w-16 aspect-h-9 md:aspect-h-2 w-[90%] md:w-[50%] md:h-[400px]'>
            <iframe frameB  order="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="390" src={url}></iframe> 
      </div>

        <div className=' w-[90%] md:w-[30%] h-[400px] rounded-md mb-28 md:mb-0 bg-[#1F2937]'>

          <div className=' border w-full  mx-auto h-[35%] flex flex-col justify-around rounded-t-m rounded-b-xl bg-white shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'>
            
            <h1 className='  m-auto text-center font-bold w-[95%] pt-2 text-[#1F2937]/90 line-clamp-2'>  {dataVideo.snippet.title} </h1>
            
            <div className="flex items-center justify-between px-4  pb-2   ">
              
                <div className=' flex items-center' >
                  <div  
                      className=' w-[40px] h-[40px] bg-white rounded-full text-[40px] bg-opacity-90 hover:bg-opacity-100 shadow-md cursor-pointer '>    
                  </div>
                    <p className='text-[13px] px-3'>{dataVideo.snippet.channelTitle} </p>
                </div>
                <button className='w-[100px] h-8 flex justify-center items-center gap-1 bg-[#F59E0B] text-white text-[13px] rounded-md hover:bg-[#F59E0B]/90 mr-4 lg:mr-0 ' >   
                  S'abonner 
                </button>
            </div>

          </div>


          <div className=' text-[13px] text-white mx-auto pt-6 h-[50%] w-[90%] flex items-center line-clamp-5'>
              <p> {dataVideo.snippet.description }</p>
          </div>

          <div className=' w-full   mx-auto flex justify-center items-center h-[15%] rounded-md bg-white shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'>
                <div className=' flex justify-between  w-[60%]'>
                    <div className='flex justify-center items-center'>
                      <button className='w-[45px] h-9 flex justify-center items-center gap-1 bg-[#1F2937] text-white text-[13px] rounded-md hover:bg-[#F59E0B]/90' >   
                          <MdThumbUp/>
                      </button> 
                      <span className=' px-2 '> {dataVideo.statistics.likeCount} </span>
                    </div>

                    <button className='w-[45px] h-9 flex justify-center items-center gap-1 bg-[#1F2937] text-white text-[13px] rounded-md hover:bg-[#F59E0B]/90' >   
                        <MdThumbDown/>  
                    </button> 
                </div>
                
          </div>
        </div>


       <FoooterPlayList datas={relatedVideo}/>
  </div>
  

  )
}

export default VideoPlayer
