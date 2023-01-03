import React from 'react'
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import InputComment from './InputComment';
import Comment from './Comment';
import FilterComment from './FilterComment';
import {channelContext} from'../Service/wassoTubeContext'
import SubComment from './Subcomment'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Commentary({idVideo}) {
const userName= localStorage.getItem('profilName'); 
const urlProfil= localStorage.getItem('image'); 

    const [userComment, setuserComment]= useState([]); 
    const [userSubComment, setuserSubComment]= useState([])

    const  {socket}= useContext(channelContext); 
    useEffect(()=>
    {
      socket.on('sendVideoComments', (data)=>{
        const {searchVideo}= data
        // console.log(searchVideo[0])

        // setuserSubComment(comment=>[{subComment: data.termComment}, ...comment]); 
      })
      
      socket.on('sendAllVideoComment', (data)=>{
        console.log(data.commentData); 
        setuserComment(comment=>[...comment, data.commentData])
        console.log(userComment)   
  })
        
        socket.on('sendUserComment', (data)=>{
           setuserComment(comment=>[{idCommentaire:data.idComment,commentaire : data.termComment, userName, urlProfil}, ...comment]); 
        })

     
        socket.on('sendUserSubComment', (data)=>{
          // console.log(data)
          setuserSubComment(comment=>[{subComment: data.termComment}, ...comment]); 
          console.log(userComment)
      })
      

        
    }, [socket])
    
    let nbreComment = userComment.length
  return (
    <div className=' w-[90%] md:w-[30%] min-h-[500px] rounded-md mb-28 md:mb-0 bg-[#1F2937] '>

        <div className=' border w-full  mx-auto h-[20%] flex flex-col justify-around rounded-t-m rounded-b-xl bg-white shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'>
            <InputComment idVideo={idVideo}/>  
        </div>
        
        <FilterComment numComment={nbreComment}/>
    <div className=''>
       { userComment.map((item)=>(
         <Comment item={item} 
        //  subcomment={userSubComment}
          />
       ))
      }     
    </div>
           
    </div> 
  )
}

export default Commentary