import React from 'react'
import { MdSearch, MdArrowDropDown} from "react-icons/md";

function SearchBar() {
  return (
    <div className=' pt-40  fixed w-full '>
        <form className="flex  flex-col justify-center items-center">   

                <div className="relative w-[85%] md:w-1/2">
                     <input type="text" id="voice-search" className="bg-[#F59E0B]/[.35]  text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-black focus:outline-none z-50" placeholder="Search ..." required/>
                    <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                        <MdSearch className='text-[35px] text-[#1F2937]'/>
                    </button>
                    
                </div>
                <hr />
                <div className='border-b  w-2/3 pt-5'></div>
                
        </form>
    
    </div>  
 
  ) 
}

export default SearchBar