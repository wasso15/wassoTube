import React from 'react'
import { useNavigation } from 'react-router-dom'
const Navigation= useNavigation

function footerItem() {
  return (
    <div className="p-5 transform transition duration-200 hover:scale-110 hover:rotate-2  ">  
   
    <div   className=" rounded overflow-hidden shadow-md">    
        <img className="w-full object-cover " src="https://cdn.pixabay.com/photo/2022/06/11/12/35/torii-7256271_960_720.jpg" alt="Mountain"/>
        </div>
 
    </div>
  )
}

export default footerItem