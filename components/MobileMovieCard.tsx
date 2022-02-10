/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MobileMovieCard = () => {
  return (
    <div className="relative">
      <div className="w-full">
       <img className="w-full" src="/assets/image cover 6 small.png" alt="image-cover" />
      </div>
      <div className="absolute pr-3 top-0 right-0 pt-3">
      <div className="absolute top-0 right-0    justify-between pr-3 pt-3  font-semibold ">
        
        <div className="text-black bg-white rounded-md p-1 h-fit text-xs">
          439mb
        </div>
      </div>
      </div>
    </div>
  )
}

export default MobileMovieCard