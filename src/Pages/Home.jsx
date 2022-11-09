
import React, { useEffect, useState, useContext } from 'react'
import Cards from '../Component/Cards'
import SearchBar from '../Component/SearchBar'; 
import {channelContext} from "../Service/wassoTubeContext"
import PopUp from '../Component/PopUp';
import Loader from '../Component/Loader';

function Home() {
  const [youtubeData, setYoutubeData]= useState();
  const [searchVideoResult, setSearchVideoResult]= useState();
  const [toWatch,setToWatch] = useState(false); 
  const [openModal, setOpenModal]= useState(false); 
 

  const {setYoutubeChannel, setVideoChannel, isAuthentified,loader, setLoader,setLikeVideo}= useContext(channelContext); 
 



const userToken =  localStorage.getItem('token'); 
const searchVideos= (term)=>{
  setLoader(true) 
  if(term){ 
   
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
  .then(response => response.json())
  .then((data)=>{setSearchVideoResult(data.items)} ); 
  setToWatch(true); 
  setVideoChannel(false); 
 
   ;}
   setLoader(false)
}

window.addEventListener('click',(e)=>{
  setOpenModal(false)
})

  useEffect(()=>{
    console.log(isAuthentified)
    if(isAuthentified){


      fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4&access_token='+userToken)
      .then(response =>{
          return response.json()
      })
      .then(data =>
        {
          console.log(data)
    
        setYoutubeChannel(data)
      });  
  
    }


   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=fr&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto",
   ).then(allresponses=>{
        return allresponses.json()
      })
      .then(datas =>
      {
        setYoutubeData(datas.items); 
        setLoader(false)
      })
      .catch((error)=>{
  console.log(error)
})  



// recuperation Video 
setToWatch(false)

// Open Modal connect User
 const timerModal= setTimeout(()=>setOpenModal(true), 15000); 
   
  },[])



  useEffect(()=>{

    if(isAuthentified)
    {
      fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4&access_token='+userToken)
      .then(response =>{    
          return response.json()
      })
      .then(data =>
        {
    
        setYoutubeChannel(data)
      })
          

      fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4&access_token='+userToken)
      .then(likedVideo =>{
          return likedVideo.json()
      })
      .then(datas =>
        {
          setLikeVideo(datas)
      })
  


    }
    else{
      setYoutubeChannel('')


    } 
  },[isAuthentified])
 
  return (  
    <div>
                
          
                { !isAuthentified && <PopUp open={openModal} setOpen={setOpenModal} /> }
        <SearchBar searchVideos={searchVideos}/>      
       {loader &&<Loader/> }
        <Cards data ={toWatch ? searchVideoResult : youtubeData}/> 
        
    </div>
  )
}

export default Home 