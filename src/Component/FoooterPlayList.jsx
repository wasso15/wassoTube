import React from 'react'; 
import FooterItem from './FooterItem';

function FoooterPlayList() {
  return (
    <div className='w-full bg-[#1F2937] h-[105px] fixed flex items-center left-0 bottom-0 p-2 gap-4'>
        <div className=' flex-none w-10 h-10 rounded-full bg-[#F59E0B]'> </div>
        <div className=' grow h-32 grid grid-cols-1  md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8'>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
        <FooterItem/>
             
              </div>
        <div className=' flex-none w-10 h-10 rounded-full bg-[#F59E0B]'> </div>
    </div>
  )
}

export default FoooterPlayList