import React from 'react'; 
import {signInWithGoogle} from "../App"; 
import {FaGoogle} from 'react-icons/fa'; 



function ButtonLogin() {
  return (
    <div className='grid place-items-center h-screen backdrop-blur-sm ' >
         <button className='bg-white bg-clip-padding bg-opacity-30 backdrop-blur-xl backdrop-filter-blur shadow-xl hover:bg-opacity-40 active:bg-opacity-40 font-extrabold text-white  w-[85%]  md:w-2/3 lg:w-1/3 inline-flex items-center rounded-lg justify-center h-16'   onClick={signInWithGoogle}> 
                <FaGoogle className='w-7 h-7 mr-3 '/>
                <span> Connectez vous avec Google </span>
         </button>
    </div>
  )
}

export default ButtonLogin