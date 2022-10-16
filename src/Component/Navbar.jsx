import React, {useState,useRef} from 'react'; 
import Logo from '../Assets/Logo.png'; 
import Profil from '../Assets/EXC_8492.jpg'; 
import {FaBell} from 'react-icons/fa'; 
import { MdVideoLibrary, MdPlaylistPlay, MdMenu } from "react-icons/md";


function Navbar() 
{
  const [open, setOpen]= useState(false); 
  const menuref= useRef(); 
  const linkRef= useRef(); 
  const textLink= useRef()
  window.addEventListener('click', (e)=>{
    if( linkRef.current!== e.target && menuref.current !== e.target && textLink.current !== e.target)
     {
     
       setOpen(false)

     }
  })
    return (
    <>
     <nav className='fixed w-full h-[60px] flex justify-between items-center bg-[#1F2937] text-[#F5F5F5] rounded-b-[15px] shadow-md z-50'> 
     
      <a href='http://localhost:3000/home' className='flex items-center px-10'>
          <div>
              <img src={Logo} alt="Logo Wassotube" className='w-[30px] md:w-[30px] ' />
          </div>
          <div className=' text-tracking-tight text-lg LogoTitle'> WassoTube</div>
      </a>
       
      {/* Menu items  */}
      <div className='hidden lg:flex  px-10'>

          <ul className='flex items-center'>
            
            <li className='flex items-center  h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer ' 
            onClick={() => setOpen(!open)}
            ref={linkRef}
            >
              <MdPlaylistPlay className='text-[25px]'/>  
              <span className='ml-1 text-[14px]' ref={textLink}> Abonnement </span>
              
              
            </li>

            <li className='flex items-center h-[60px] hover:border-[#F59E0B] border-b-4 border-[#1F2937] cursor-pointer' > 
              <MdVideoLibrary className='text-[20px]'/>
              <span className='ml-2 text-[14px]'> Bibliotheque </span>
               
            </li>
          </ul>

          <div className='  flex items-center'>
            <div className=' w-[30] px-4'>
              <img src={Profil} alt=""  className=" rounded-full w-8 h-8 object-cover"/>
            </div>
            
            <div>
                <button type="button" className=" inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-white rounded-lg ">
                  <FaBell className=" w-[18px] h-[18px] text-[#F59E0B]"/>              
              </button>
              
            </div>

          </div>
      </div>




       {/* mobilem menus */}
       <div className='lg:hidden'>
          <MdMenu className='text-[35px] mr-9 ' />
       </div>

    </nav> 

      <div className='flex justify-center'>
    {/* Drop Menu */}
    {
      open && 
      <div className=' fixed top border w-[99%] mx-auto mt-[50px] h-[230px] rounded-b-xl bg-white z-40  shadow-md backdrop-blur-sm bg-opacity-30   backdrop-filter-blur'
      //  onClick={()=>{setOpen(false)}}
       ref={menuref}
       >
    </div> 
    }
    </div>
    </>
  )
}

export default Navbar