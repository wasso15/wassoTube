import React, {useState,useRef, useContext} from 'react'; 
import Logo from '../Assets/Logo.png'; 
import {FaBell} from 'react-icons/fa'; 
import firebase from 'firebase/compat/app';
import { MdVideoLibrary, MdPlaylistPlay, MdMenu, MdChevronLeft, MdChevronRight,MdLogout, MdClose } from "react-icons/md";
import {channelContext} from '../Service/wassoTubeContext'; 
import { useNavigate } from 'react-router-dom';


    


function Navbar({isAuthentified}) 
{

const [open, setOpen]= useState(false); 
const [openDropMenu,setOpenDropMenu ] = useState(false); 
const [openLogOut, setOpenLogOut]= useState(false)
const {youtubeChannel} = useContext(channelContext); 
const datas = youtubeChannel.items; 
const surfing = useNavigate(); 


  const menuref= useRef(); 
  const linkRef= useRef(); 
  const textLink= useRef(); 
  const iconLeft = useRef(); 
  const iconRight = useRef(); 
  const imgProfil = useRef()


  const imgUrl= localStorage.getItem('image'); 

  const userFullname= localStorage.getItem('userName')

  window.addEventListener('click', (e)=>{
    if( linkRef.current!== e.target && menuref.current !== e.target && textLink.current !== e.target)
     {
     
       setOpen(false)

     }
    if(e.target !== imgProfil.current){
        setOpenLogOut(false)
    }
  })
  
  // LogOut Fonction 

  const logOutFirebase =()=>{
  
   firebase.auth().signOut(); 
   isAuthentified(false)
   // Suppression du local storage 
    localStorage.clear()
   // Redirection vers le login 
   surfing('/')

   
    
  }



  // Slider card functional

  const slides= [1,2,3,4,5,6,7,8,9,10];  
  const slider= useRef(null); 
  
  const sliderLeft= ()=>
  {
      
    slider.current.scrollLeft= slider.current.scrollLeft - 500;
  }

  const sliderRight= ()=>
  {
      slider.current.scrollLeft= slider.current.scrollLeft + 500
  }
     
    return (
    <>
     <nav className='fixed w-screen h-[60px] flex justify-between items-center bg-[#1F2937] text-[#F5F5F5] rounded-b-[15px] shadow-xl md:shadow-xl z-50'> 
     
      <a href='http://localhost:3000/home' className='flex items-center px-5  md:px-10'>
          <div>
              <img src={Logo} alt="Logo Wassotube" className='w-[30px] md:w-[30px] ' />
          </div>
          <div className=' text-tracking-tight text-lg LogoTitle'> WassoTube</div>
      </a>
       
      {/* Menu items  */}
      <div className='hidden md:flex  lg:px-10'>

          <ul className='flex items-center'>
            
            <li className='flex items-center  h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer p-3 lg:p-6 ' 
            onClick={() => setOpen(!open)}
            ref={linkRef}
            >
              <MdPlaylistPlay className='text-[25px]'/>  
              <span className='ml-1 text-[14px] ' ref={textLink}> Abonnement </span>
              
            </li>

            <li className='flex items-center h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer p-3 lg:p-6' > 
              <MdVideoLibrary className='text-[20px]'/>
              <span className='ml-2 text-[14px]'> Bibliotheque </span>
               
            </li>
          </ul>

          <div className='  flex items-center'>
            
            {/* Image profil */}
             

            <div className=' w-[30] px-4 ml-2' onClick={()=>setOpenLogOut(!openLogOut)}>
              <img src={imgUrl} alt=""  className=" rounded-full w-8 h-8 object-cover" ref={imgProfil}/>
            </div>
            
            <div>
                <button type="button" className="hidden lg:inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-white rounded-lg ">
                  <FaBell className=" w-[18px] h-[18px] text-[#F59E0B]"/>              
              </button>
              
            </div>

          </div>
      </div>


      {/* mobile menus */}
       <div className='md:hidden'>
          <MdMenu className='text-[35px] mr-5 ' onClick={()=>setOpenDropMenu(!openDropMenu)} />
       </div>

    </nav> 


      {/* Dropmenu LogoOut  */}
      
      {openLogOut &&
          <div className='hidden md:block fixed top border md:w-[150px] lg:w-[180px] mx-auto mt-[50px] md:right-1 lg:right-9 h-[160px] rounded-b-xl bg-white z-40  shadow-sm backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'>

              <ul  className='flex flex-col items-center '>
                    

                    <li className='flex items-center justify-center hover: border-b border-[#1F2937] font-bold w-[90%] mt-2 py-5' ref={linkRef}>
                        
                        <span className='ml-1 text-sm text-center text-[#1F2937] ' ref={textLink}> Guylain Wasso </span>
                        
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
    
     
     {/* Drop Menu */}
      <div className='flex justify-center'>
    
    {
      open && 
      <div className=' fixed top border w-[99%] mx-auto mt-[50px] h-[230px] rounded-b-xl bg-white z-40  shadow-md backdrop-blur-sm bg-opacity-60 backdrop-filter-blur'
      //  onClick={()=>{setOpen(false)}}
       ref={menuref}
       >

        <div className='w-full h-[200px] relative flex items-center ' >

              <div 
                    ref={iconLeft}
                    onClick={sliderLeft}
                    className=' w-[40px] h-[40px] bg-white rounded-full absolute left-0 text-[40px] bg-opacity-40 hover:bg-opacity-100 shadow-md cursor-pointer '>
                  <MdChevronLeft/>
              </div>

              <div  className='w-[150px] h-[120px] flex flex-nowrap' ref={slider}>
                  {slides.map((data,index)=>{
                      return(
                        
                          <div  key={index}className=' w-[150px] rounded-md inline-block ml-2 mr-2 shadow-md '>
                              <img src="" className='rounded-md  shadow-sm object-cover w-full h-full' alt="" />
                          </div>
                      )
                  })}
              </div>
              <div  
                     ref={iconRight}
                    onClick={sliderRight}
                    className=' w-[40px] h-[40px] bg-white rounded-full absolute right-0 text-[40px] bg-opacity-40 hover:bg-opacity-100 shadow-md cursor-pointer '>
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