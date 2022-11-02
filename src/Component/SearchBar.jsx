import React, { useState } from 'react'
import { MdSearch, MdArrowDropDown} from "react-icons/md";

function SearchBar({searchVideos}) {
  const [termSearch, setTermSearch]= useState(''); 
  let termChange; 
  const handleChange = (event)=>{
   termChange= event.target.value
  }

  return (
    <div className=' pt-24 first-letter:md:pt-36 z-20 fixed w-full bg-[white] border-[#F59E0B]  '>
        <form className="flex  flex-col justify-center items-center" 
        onSubmit=
        {(e)=>{
          e.preventDefault()
          searchVideos(termChange)}}>   

                <div className="relative w-[85%] md:w-1/2">
                     <input type="text" 
                     onChange={e=> handleChange(e)}
                     id="voice-search" className="bg-[#F59E0B]/[.35]  text-gray-900 text-sm block  rounded-lg w-full pl-10 p-2.5 placeholder-black focus:outline-none z-50" placeholder="Search ..." required/>
                    
                    <button type="submit" className=" absolute inset-y-0 right-0 w-14 items-center rounded-lg bg-[#F59E0B]/[.60] hover:bg-[#F59E0B]/[.80] ">

                        <MdSearch className='text-[30px] text-[#1F2937] m-auto'/>
                    </button>
                    
                </div>
                <hr />
                <div className='border-b-2 w-[85%] pt-10 shadow-sm'></div>
                
        </form>
    
    </div>  
 
  ) 
}

export default SearchBar