import React from 'react'
import { useContext } from 'react';
import Cards from '../Component/Cards';
import SearchBar from '../Component/SearchBar'; 
import { channelContext } from '../Service/wassoTubeContext';
import Loader from '../Component/Loader';
import { useState } from 'react';


function ChannelVideo() {
    let loading=true
    const {videoChannel} = useContext(channelContext); 
     videoChannel ? loading=false : loading=true
    console.log(videoChannel)
  return (
    <div>
         {loading&&<Loader/>}
        <SearchBar  />
        <Cards data ={videoChannel}/> 
    </div>
  )
}

export default ChannelVideo