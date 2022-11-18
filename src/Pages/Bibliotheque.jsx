import React, {useContext} from 'react'
import { useState, useEffect  } from 'react';
import Cards from '../Component/Cards';
import Loader from '../Component/Loader';
import SearchBar from '../Component/SearchBar';
import {channelContext} from "../Service/wassoTubeContext"

function Bibliotheque() {
    const {setLikeVideo,likeVideo, isAuthentified }= useContext(channelContext); 
    const userToken =  localStorage.getItem('token'); 
    const [likedData, setLikeData] = useState()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
      if(isAuthentified)
      {
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&myRating=like&key=AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4&access_token='+userToken)
        .then(likedVideo =>{
            return likedVideo.json()
        })
        .then(datas =>
          {
             setLikeData(datas.items); 
             setLoader(false)
        })
      }
      
    })

  return (
    <div>
        {/* <SearchBar/>    */}
        
        
        {loader &&<Loader/> }
        <Cards data={likedData} /> 
    </div>
  )
}

export default Bibliotheque