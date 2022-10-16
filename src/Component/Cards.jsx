import React from 'react'
import Card from './Card'

function Cards({data}) {
 
  return (
   
      <div className=' pt-64  w-[85%] m-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 '>
        {
          data && data.map((dataItem, index)=>
            <div key={index}>
              <Card dataItem={dataItem}/>
            </div>
          )
        }

        
        
      </div>

  )
}

export default Cards