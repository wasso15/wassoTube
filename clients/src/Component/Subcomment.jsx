import React from 'react'; 
import {MdThumbUp, MdThumbDown} from 'react-icons/md'; 
import InputSubcomment from './InputSubcomment'; 
import { channelContext } from '../Service/wassoTubeContext';
import { useContext } from 'react';


function SubComment({item}) {
    const {showInputSub, setShowInputSub}=useContext(channelContext); 
    console.log(item)
  return (
    <div >
            <div className=' flex  mt-1 '>
                <div className='flex  items-start justify-center w-full  '>

                    <div className='pl-6 pr-2  '>
                         <img src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className=" rounded-full w-6 h-6 object-cover"/>
                    </div>

                            
                    <div className='w-[70%] text-xs px-5 pt-2 pb-2  text-gray-900 bg-white shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur rounded-lg h-auto' >
                        {/* {item.subComment}  */}
                    </div>

                    </div>
                </div> 
                
                
         </div>   
)
}

export default SubComment