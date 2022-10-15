import React from 'react'; 
import Logo from '../Assets/Logo.png'; 
import Profil from '../Assets/EXC_8492.jpg'; 
import {FaBell,FaAlbum} from 'react-icons/fa'; 
import { MdVideoLibrary, MdPlaylistPlay, MdMenu } from "react-icons/md";
import { useNavigate  } from 'react-router-dom';


function Navbar() {
    return (
    <nav className='fixed w-full h-[6 0px] flex justify-between items-center bg-[#1F2937] text-[#F5F5F5] rounded-b-[15px] shadow-md'>
      <div className='flex items-center px-10'>
          <div>
              <img src={Logo} alt="Logo Wassotube" className='w-[40px] md:w-[40px] ' />
          </div>
          <div className=' text-tracking-tight text-xl LogoTitle'> WassoTube</div>
      </div>
      {/* Menu items  */}
      <div className='hidden lg:flex  px-10'>

          <ul className='flex items-center'>
            <li className='flex items-center'>
              <MdPlaylistPlay className='text-[25px]'/>  
              <span className='ml-1'> Abonnement </span>
            </li>
            <li className='flex items-center' > 
              <MdVideoLibrary className='text-[20px]'/>
              <span className='ml-2'> Bibliotheque </span>
               
            </li>
          </ul>

          <div className='  flex items-center'>
            <div className=' w-[60] px-4'>
              <img src={Profil} alt=""  className=" rounded max-w-[80px] h-[60px] align-middle border-none"/>
            </div>
            
            <div>
                <button type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-white rounded-lg hover:bg-blue-800 ">
                  <FaBell className="w-8 h-8 text-[#F59E0B]"/>              
                <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-[#F59E0B] rounded-full border-2 ">20</div>
              </button>
              
            </div>

          </div>
      </div>
       {/* mobilem menus */}
       <div className='lg:hidden'>
          <MdMenu className='text-[35px] mr-9 ' />
       </div>

    </nav>
  )
}

export default Navbar