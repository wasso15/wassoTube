
import React, { useEffect, useState, useContext } from 'react'
import Cards from '../Component/Cards'
import SearchBar from '../Component/SearchBar'; 
import {channelContext} from "../Service/wassoTubeContext"

function Home() {
  const [youtubeData, setYoutubeData]= useState();
  const [searchVideoResult, setSearchVideoResult]= useState();
  const [toWatch,setToWatch] = useState(false); 
  const {setYoutubeChannel}= useContext(channelContext)

const userToken =  localStorage.getItem('token'); 
 
const searchVideos= (term)=>{
  if(term){ 
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
  .then(response => response.json())
  .then((data)=>{setSearchVideoResult(data.items)} ); 
  setToWatch(true) ;}
 
 

}
  
  useEffect(()=>{

    
  
Promise.all( [
   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=fr&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto",
   )   
  ]
  

).then(allresponses=>{
  const response1= allresponses[0].json(); 
  response1.then((datas)=>{
    setYoutubeData(datas.items)
   
  })
})

fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4&access_token='+userToken)
    .then(response =>{
        return response.json()
    })
    .then(data =>
      {

      setYoutubeChannel(data)
    })
    

// recuperation Video 
setToWatch(false)

   
  },[])
 
  return (  
    <div>
        <SearchBar searchVideos={searchVideos}/>
        <Cards data ={toWatch ? searchVideoResult : youtubeData}/>
    </div>
  )
}

export default Home