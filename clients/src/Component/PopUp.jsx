import React from 'react'
import {MdClose} from 'react-icons/md'; 
import popUpImg from '../Assets/popup.jpg'
import decPopUpImg from '../Assets/pretty-blond-wavy-haired-teenage-girl-waving-goodbye-to-friend-looking-sad-isolated-on-blue-background-bye-bye-expression.jpg'
import { AiOutlineGoogle } from "react-icons/ai"
import {signInWithGoogle} from "../Service/Auth"; 
import {channelContext} from '../Service/wassoTubeContext'; 
import {useContext} from 'react';


function PopUp({open, setOpen,fetch}) {
    const {isAuthentified,fetchUserData}= useContext(channelContext)

console.log(isAuthentified)
  return (
    open && 
    <div onClick={(e)=>e.stopPropagation()}
        className='fixed bg-black w-full h-full backdrop-blur-sm bg-opacity-60 backdrop-filter-blur  flex justify-center items-center z-50'>
        
        <div className=' bg-white md:max-w-[600px] w-full h-[100%] md:h-[350px] fixed rounded-md flex flex-col md:flex-row shadow-md ' >
            
            <img src={popUpImg} className="  w-full md:w-[55%] h-full object-cover object-right-top rounded-md" alt=""/>
            
            <MdClose className=' text-[30px]  text-[#F59E0B] absolute top-2 md:top-0 right-2 md:right-0' onClick={()=> setOpen(false)}/>

            <div className='flex flex-col justify-center items-center  gap-5 md:gap-10'>
                
                <div className='flex flex-col justify-center items-center gap-5  '>
                    <h1 className='font-bold text-[30px] text-center '> Bienvenu(e)</h1>
                    <p className='text-center w-[90%] font-normal text-sm'> Utilisez toutes nos fonctionnalités après vous être connecté avec votre compte Gmail </p>
                </div>
                
                <div className=' flex flex-col md:flex-row mb-2 md:mb-0  justify-around gap-2  w-[90%] '>
                    <button className='border-2 py-2 w-full border-[#1F2937]  hover:bg-[#1F2937]/5'onClick={()=> setOpen(false)}> No, Merci </button>
                    <button onClick={signInWithGoogle}
                        className='py-2 w-full bg-[#1F2937] hover:bg-[#1F2937]/90 flex items-center gap-2 justify-center text-white '> <AiOutlineGoogle/> Sign in </button>
                </div>

            </div>

        </div>
    </div>
  )
}   

export default PopUp