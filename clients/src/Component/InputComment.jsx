import React from 'react'; 
import { useState, useContext} from 'react';
import {MdSend} from 'react-icons/md'; 
import {channelContext} from'../Service/wassoTubeContext'

function InputComment() {
  const {socket}= useContext(channelContext); 
  const [termComment, setTermComment] = useState('')
  const onSubmitComment= (e)=>{
    e.preventDefault();  
    socket.emit ('commentUser', {termComment})
  }
  return (
    <div className='flex  items-center justify-center h-[100%]'>
        <div className=' w-[30] pr-2  '>
              <img src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className=" rounded-full w-8 h-8 object-cover"/>
        </div>  
            <form className='w-[80%] py-5' onSubmit={onSubmitComment}>
                <div className=' bg-slate-50/60 p-2 rounded-lg relative  flex items-center ' >
                    
                    < input  
                      id='inputComment'
                      onChange={(e)=> setTermComment(e.target.value)}
                      type="text"  
                      class=" bg-transparent text-gray-900 text-sm rounded-lg focus:outline-none resize-y w-full" placeholder='Votre commentaire...' />
                    
                    <div className='absolute -top-0.5 -right-2  '>
                        <button type="submit" className='w-10 h-10 bg-[#1F2937] rounded-full flex justify-center items-center text-[#F59E0B] text-xl'>
                            <MdSend/>
                         </button>
                    </div>  
                </div>
                
            </form>
    </div>
  )
}

export default InputComment