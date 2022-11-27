import React from 'react'; 
import {MdSort} from 'react-icons/md'

function FilterComment() {
  return (
    <div className=' border-b-2 w-[90%] m-auto mt-3 text-white text-xs flex justify-between items-end'>
        <p> <span className=' font-bold'> 200 </span> commentaires </p> 
        <MdSort className=' text-[20px]'/>
    </div>
  )
}

export default FilterComment