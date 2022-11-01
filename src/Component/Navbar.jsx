import React, {useState,useRef, useContext} from 'react'; 
import Logo from '../Assets/Logo.png'; 
import sorry from '../Assets/pngwing.com.png'
import { AiOutlineGoogle } from "react-icons/ai"
import {SignOut} from '../Service/firebase'
import {signInWithGoogle} from "../Service/firebase"; 
import { MdVideoLibrary, MdPlaylistPlay, MdMenu, MdChevronLeft, MdChevronRight,MdLogout, MdClose } from "react-icons/md";
import {channelContext} from '../Service/wassoTubeContext'; 
import { useNavigate } from 'react-router-dom';


function Navbar() 
{

const [openDropMenu,setOpenDropMenu ] = useState(false); 
const [openLogOut, setOpenLogOut]= useState(false); 
const [openChannelList, SetOpenChannelList]= useState(false)

const {youtubeChannel,setVideoChannel,isAuthentified, setIsAuthentified} = useContext(channelContext); 

console.log(isAuthentified)

const datas = youtubeChannel.items; 

console.log(datas)

  const menuref= useRef(); 
  const linkRef= useRef(); 
  const textLink= useRef(); 
  const iconLeft = useRef(); 
  const iconRight = useRef(); 
  const imgProfil = useRef(); 



  const imgUrl= localStorage.getItem('image'); 
  const profilName= localStorage.getItem('profilName'); 

  const onChannelVideo= (id)=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=20&order=date&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
    .then(response=> response.json())
    .then(datas=> setVideoChannel(datas.items))
    SetOpenChannelList(false)  
  }

  window.addEventListener('click', (e)=>{
    SetOpenChannelList(false)
     console.log(e.target)
  
  })
  
  // LogOut Fonction 

  const logOutFirebase =()=>{

   SignOut()
  
   setIsAuthentified(false)
   setOpenLogOut(false)
   // Suppression du local storage 
    localStorage.clear()

  
  }
  const logginNavabar= ()=>
  {
    

  }


  // Slider card functional

  const slider= useRef(); 
  
  const sliderLeft= ()=>
  {
      
    slider.current.scrollLeft= slider.current.scrollLeft - 500; 
  }

  const sliderRight= ()=>
  {
      slider.current.scrollLeft= slider.current.scrollLeft + 500; 
    
  }
     
    return (
    <>
     <nav className='fixed w-screen h-[60px] flex justify-between items-center bg-[#1F2937] text-[#F5F5F5] rounded-b-[15px] shadow-xl md:shadow-lg z-40'> 
     
      <a href='http://localhost:3000/' className='flex items-center px-5  md:px-10'>
          <div>
              <img src={Logo} alt="Logo Wassotube" className='w-[30px] md:w-[30px] ' />
          </div>
          <div className=' text-tracking-tight text-lg LogoTitle'> WassoTube</div>
      </a>
       
      {/* Menu items  */}
      <div className='hidden md:flex  lg:px-10'>

          <ul className='flex items-center'>
            
            <li className='flex items-center  h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer p-3 lg:p-6 ' 
            onClick={(e) => 
              {SetOpenChannelList(!openChannelList); e.stopPropagation()}}>
              <MdPlaylistPlay className='text-[25px]'/>  
              <span className='ml-1 text-[14px] ' ref={textLink}> Abonnement </span>
              
            </li>

            <li className='flex items-center h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer p-3 lg:p-6' > 
              <MdVideoLibrary className='text-[20px]'/>
              <span className='ml-2 text-[14px]'> Bibliotheque </span>
               
            </li>
          </ul>

          <div className='flex items-center'>
            
            {/* Image profil */}
             
           { isAuthentified ? 

             <div className=' w-[30] px-4 ml-2' onClick={()=>setOpenLogOut(!openLogOut)}>
              <img src={imgUrl} alt=""  className=" rounded-full w-8 h-8 object-cover" ref={imgProfil}/>
            </div>  

              :

            <div className=''>
              <button onClick={signInWithGoogle}
                     className='w-[100px] h-10 flex justify-center items-center gap-1 bg-[#F59E0B] rounded-md hover:bg-[#F59E0B]/90 mr-4 lg:mr-0 ' >
                <AiOutlineGoogle className=' text-[24px] '/>
                 Sign In 
              </button>
            </div>}
          </div>
      </div>


      {/* mobile menus */}
       <div className='md:hidden'>
          <MdMenu className='text-[35px] mr-5 ' onClick={()=>setOpenDropMenu(!openDropMenu)} />
       </div>

    </nav> 


      {/* Dropmenu LogoOut  */}
      
      {openLogOut &&
          <div className='hidden md:block fixed top border md:w-[150px] lg:w-[180px] mx-auto mt-[50px] md:right-1 lg:right-2 h-[160px] rounded-b-xl bg-white z-30  shadow-sm backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'>

              <ul  className='flex flex-col items-center '>
                    

                    <li className='flex items-center justify-center hover: border-b border-[#1F2937] font-bold w-[90%] mt-2 py-5' ref={linkRef}>
                        
                        <span className='ml-1 text-sm text-center text-[#1F2937] first-letter:uppercase ' ref={textLink}> {profilName} </span>
                        
                      </li> 

                    <li className='flex items-center justify-center  hover:border-[#F59E0B]   cursor-pointer py-6' > 
                  
                      <MdLogout className='text-xl text-[#F59E0B]'/>
                      <span className='ml-1 text-sm text-center text-[#1F2937]' onClick={logOutFirebase}> Se deconnecter </span>
                   
                    </li>
              </ul>
          </div> 
      }

      


    {/* DropMenu Mobile Menu items */}
      { openDropMenu && 
        <div className='fixed top border w-[100%] mx-auto mt-[50px] h-[75%] md:hidden rounded-b-xl bg-[#1F2937] z-40  shadow-md backdrop-blur-sm  backdrop-filter-blur ' >
            <ul  className='flex flex-col items-center mobile-men '>
            
                <li className='flex items-center justify-end h-[60px]  border-b   border-[#F59E0B] w-full cursor-pointer p-3' ref={linkRef}>
                    
                  <MdClose className=' text-[30px] text-[#F59E0B]' onClick={()=>setOpenDropMenu(false)}/>
                 
                </li>

                <li className='flex items-center justify-center   h-[60px]  hover:border-[#F59E0B] border-b   border-[#F59E0B] w-full cursor-pointer p-3 lg:p-6 ' ref={linkRef}>
                    
                  
                    <span className='ml-1 text-xl text-center text-white ' ref={textLink}> Abonnement </span>
                    
                  </li>

                <li className='flex items-center justify-center   h-[90px]  hover:border-[#F59E0B] border-b  border-[#F59E0B] w-full cursor-pointer p-3 lg:p-6 ' > 
                  
                  <span className='ml-1 text-xl text-center text-white '> Bibliotheque </span>
                </li>

                 <div className=' w-[30] px-4 ml-2'>
              <img src={imgUrl} alt=""  className=" rounded-full w-22 h-22 mt-5 object-cover"/>
            </div>
                <li className='flex items-center justify-center h-[60px]  hover:border-[#F59E0B]  w-full cursor-pointer ' > 
              
                   <MdLogout className='text-xl text-[#F59E0B]'/>
                    <span className='ml-1 text-xl text-center text-white ' onClick={logOutFirebase}> Se deconnecter </span>
                </li>
          </ul>
        </div>
      }
    
     
     {/* Channel Slider */}
      <div className='flex justify-center'>
    
    {
  

    openChannelList &&  
          <div className=' hidden md:block fixed top border w-[99%] mx-auto mt-[50px] h-[230px] rounded-b-xl bg-white z-30  shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'
          //  onClick={()=>{setOpen(false)}}
          ref={menuref}
           onClick={(e)=>{e.stopPropagation()}}>

            <div className='w-full h-[180px] relative flex items-center ' >

                  <div 
                        ref={iconLeft}
                        onClick={sliderLeft}
                        className=' w-[40px] h-[40px] bg-white rounded-full absolute left-0 text-[40px]  bg-opacity-90 hover:bg-opacity-100 shadow-md cursor-pointer z-50'>
                      <MdChevronLeft/>
                  </div>

                  {/* channel List  */}

                  { datas ? 
                  
                  <div className='flex overflow-x-scroll scrollbar-none h-[150px] items-center mt-9' ref={slider} >
                      {
                        
                          datas.map(((data,index)=>
                        
                              <img key={index} src={data.snippet.thumbnails.high.url} alt='Chaine Youtube'
                              onClick={()=>onChannelVideo(data.snippet.resourceId.channelId)}
                              className='w-28 h-28 rounded mx-3 shadow-lg cursor-pointer transform transition duration-200 hover:scale-110 hover:rotate-2 '/>
                        
                          ))
                      }
                  </div>  
                    
                    : 
                  
                  <div className='text-center w-full flex flex-col items-center justify-center'>
                     
                       <img src={sorry} className=' mt-10 w-[150px]' />  
                       <p className=' font-bold text-xl text-[#1F2937]'>Importez vos flux youtube en vous connectant à votre compte Gmail </p>

                     </div>
                }
              
                  <div  
                        ref={iconRight}
                        onClick={sliderRight}
                        className=' w-[40px] h-[40px] bg-white rounded-full absolute right-0 text-[40px] bg-opacity-90 hover:bg-opacity-100 shadow-md cursor-pointer '>
                      <MdChevronRight/>
                  </div>

            </div>


          </div> 
                  }
      </div>
   </>
  )
}

export default Navbar