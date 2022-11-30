import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

function Header() {
    const location =useLocation(); 
    // let isVideoPlayer= !location.pathname.includes('/playvideo/'); 
  return (
    <div>
        <Navbar/>
        {/* {isVideoPlayer && */}
        <SearchBar/>
        {/* } */}
    </div>
  )
}

export default Header