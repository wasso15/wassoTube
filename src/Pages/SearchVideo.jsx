import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Cards from '../Component/Cards';
import Loader from '../Component/Loader';

function SearchVideo() {
    const {term} = useParams();
    const [loader, setLoader] = useState(true); 
    let [searchData, setSearchData] = useState()
    useEffect(() => {

  if(term)
  { 
   
     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
    .then(response => response.json())
    .then((data)=>{
        setSearchData (data.items); 
        setLoader(false)}
     )
}
 
      
    }, [])
        // console.log(searchData[0])

    useEffect(() => {

        if(term)
        { 
         
           fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyAKkmVi95-loHneugrtDolHPduXe_IZoto`)
          .then(response => response.json())
          .then((data)=>{
              setSearchData (data.items); 
              setLoader(false)}
           )
      }
       
            
          }, [term])
    
  return (
    <div>
        {loader && <Loader/>}
        <Cards data={searchData}/>
    </div>
  )
}

export default SearchVideo