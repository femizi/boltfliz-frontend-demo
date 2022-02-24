/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";
const MovieBannerCard = () => {
  return (
    <div className="relative md:hidden">
    <div className="w-full rounded-md">
     <img className="w-full rounded-md" src="/assets/BANNER-4.jpg" alt="image-cover" />
    </div>
    
  </div>
  )
}

export default MovieBannerCard