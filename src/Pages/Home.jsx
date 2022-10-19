
import React, { useEffect, useState } from 'react'
import Cards from '../Component/Cards'
import SearchBar from '../Component/SearchBar'

function Home() {
  const [youtubeData, setYoutubeData]= useState();
  const [searchVideoResult, setSearchVideoResult]= useState();
  const [toWatch,setToWatch] = useState(false); 


const searchVideos= (term)=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
  .then(response => response.json())
  .then((data)=>{setSearchVideoResult(data.items)} ); 
  setToWatch(true) ;
 

}
  
  useEffect(()=>{

  
Promise.all( [
   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=fr&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto",
   ) 
  ]
  

).then(allresponses=>{
  const response1= allresponses[0].json()
  response1.then((datas)=>{
    setYoutubeData(datas.items)
   
  })

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