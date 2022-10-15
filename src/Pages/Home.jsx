import React, { useEffect, useState } from 'react'
import Cards from '../Component/Cards'
import Navbar from '../Component/Navbar'
import SearchBar from '../Component/SearchBar'

function Home() {
  const [youtubeData, setYoutubeData]= useState();
  useEffect(()=>{
   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=fr&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto")
   .then(response=>response.json())
   .then(response=>setYoutubeData(response.items) )  
  },[])
  
  
  return (  
    <div>
        <SearchBar/>
        <Cards data ={youtubeData}/>
    </div>
  )
}

export default Home