import React from 'react'; 
import {MdThumbUp, MdThumbDown} from 'react-icons/md'; 
import InputSubcomment from './InputSubcomment'; 
import { channelContext } from '../Service/wassoTubeContext';
import { useContext } from 'react';
import dayjs from 'dayjs';
import relativeTIme from "dayjs/plugin/relativeTime";
import SubComment from './Subcomment';
import localeFr from 'dayjs/locale/fr'
dayjs.extend(relativeTIme);
dayjs.locale('fr')

function Comment({item,subcomment}) {
    const {showInputSub, setShowInputSub}=useContext(channelContext); 

    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);
    const [activeBtn, setActiveBtn] = useState("none");

    // timestamp conversion 
       const date= dayjs(item.__createdtime__).format('MMMM D YYYY, h:mm:ss A')
       const commentDay=dayjs(date).fromNow(); 
 
  return (
    <div >
            <div className=' flex  mt-5 '>
                <div className='flex  items-start justify-center w-full  '>

                    <div className='pr-2  '>
                                <img src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className=" rounded-full w-6 h-6 object-cover"/>
                    </div>

                            <div className='w-[80%] text-xs px-3 pt-2 pb-2  text-gray-900 bg-white shadow-md backdrop-blur-sm bg-opacity-80 backdrop-filter-blur rounded-lg h-auto' >
                                  <div className='flex text-[10px]'>
                                    <div className=' font-bold'> Guylain wasso </div>
                                    <span className=' px-1'> | </span>
                                    <div> {commentDay} </div>
                                  </div>
                                  
                                    {item.commentaire}
                            </div>
                </div>
            </div> 

                <div className='text-white mt-1 flex  w-full text-center m-auto text-xs  flex-col '> 
                    <div className='w-auto flex m-auto gap-6  '>
                        <div className='flex gap-1 items-center'>
                            <p> J'aime </p> 
                            <span className='text-[#F59E0B] '> <MdThumbUp/> </span>  
                            <span> 0</span>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <span className='text-[#F59E0B] text-xs'> <MdThumbDown/> </span>  
                            <span> 0 </span>
                        </div>
                        <span>  |  </span>
                <div className='flex gap-1 items-center'>
                    <span
                        onClick={()=> setShowInputSub(true) } 
                        className=' cursor-pointer'> 
                    Repondre 
                    </span>
                </div>
         </div>
            {/* {subcomment &&<SubComment/>}
            { showInputSub && <InputSubcomment/>} */}
    </div>
</div>
  )
}

export default Comment