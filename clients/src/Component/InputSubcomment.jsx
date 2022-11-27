import React from 'react'; 
import { useState, useContext} from 'react';
import {MdSend} from 'react-icons/md'; 
import {channelContext} from'../Service/wassoTubeContext'

function InputComment() {
  const {socket, setShowInputSub}= useContext(channelContext); 
  const [termComment, setTermComment] = useState('');

  const onSubmitComment= (e)=>{
    e.preventDefault();  
    socket.emit ('subcommentUser', {termComment}); 
    setShowInputSub(false)
  }
  return (
    <div className='flex  items-center justify-center h-[100%] ml-6'>
        <div className=' w-[30] pr-1  '>
              <img src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className=" rounded-full w-5 h-5 object-cover"/>
        </div>  
            <form className='w-[75%] py-2' onSubmit={onSubmitComment}>
                <div className=' bg-slate-50/60 p-2 rounded-lg relative  flex items-center ' >
                    
                    < input  
                      id='inputComment'
                      onChange={(e)=> setTermComment(e.target.value)}
                      type="text"  
                      class=" bg-transparent text-gray-900 text-sm rounded-lg focus:outline-none resize-y w-[60%]" placeholder='Votre commentaire...' />
                    
                    <div className='absolute -top-0.5 -right-2'>
                        <button type="submit" className='w-10 h-10 bg-[#F59E0B] rounded-full flex justify-center items-center text-[#1F2937] text-xl'>
                            <MdSend/>
                         </button>
                    </div>  
                </div>
                
            </form>
    </div>
  )
}

export default InputComment