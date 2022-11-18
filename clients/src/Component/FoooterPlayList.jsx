import React, {useRef} from 'react'; 
import FooterItem from './FooterItem';
import {MdChevronLeft, MdChevronRight } from "react-icons/md";


function FoooterPlayList({datas}) {
  const iconLeft = useRef(); 
  const iconRight = useRef(); 
  console.log(datas)

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
    <div className='w-full bg-[#1F2937] h-[105px] fixed flex items-center left-0 bottom-0 p-2 gap-4'>
        <div className='w-full h-[180px] relative flex items-center ' >

                  <div 
                        ref={iconLeft}
                        onClick={sliderLeft}
                        className=' w-[40px] h-[40px] bg-white rounded-full absolute left-0 text-[40px]  bg-opacity-90 hover:bg-opacity-100 shadow-md cursor-pointer z-50'>
                      <MdChevronLeft/>
                  </div>

                  {/* channel List  */}

{  datas &&              
                  <div className='flex overflow-x-scroll scrollbar-none h-[150px] items-center mt-9' ref={slider} >
                      {
                        
                          datas.map(((data,index)=>
                        
                              <img key={index} src={data.snippet.thumbnails.high.url} alt='Chaine Youtube'
                              className='w-28 h-28 rounded mx-3 shadow-lg cursor-pointer transform transition duration-200 hover:scale-110 hover:rotate-2 '/>
                        
                          ))
                      }
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
  )
}

export default FoooterPlayList