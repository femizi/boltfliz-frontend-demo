/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";

const MovieCard = () => {
  return (
   <div className='flex flex-col px-2 drop-shadow' >
      <div className=" ">
      <div className="w-full z-0 ">
       <img className="w-full rounded-t-lg z-0" src="/assets/triplett.jpg" alt="image-cover" />
      </div>
      <div className=" w-full  p-2 z-10 rounded-b-lg font-semibold text-black  bg-white">
        
        <div className="text-sm leading-6   ">
         17 year old triplett earns nursing degree while in secondary school
         
        </div>
      
      </div>
    </div>
   </div>
  )
}

export default MovieCard