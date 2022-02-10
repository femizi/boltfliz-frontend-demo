/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";
const MovieBannerCard = () => {
  return (
    <div className="relative md:hidden">
    <div className="w-full rounded-sm">
     <img className="w-full rounded-md" src="/assets/image cover 4.png" alt="image-cover" />
    </div>
    <div className="absolute inset-x-0 bottom-0 w-full flex  justify-between p-4 font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
      <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
        <Image
          src="/assets/arrow-right.svg"
          width="5px"
          height="11px"
          alt="continue"
        ></Image>
      </div>
      <div className="text-[18px] border-r border-neutral-200 pr-6">
        Money Heist
        <br />
        <span className="text-sm">2hrs ago</span>
      </div>
      <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
        439mb
      </div>
    </div>
  </div>
  )
}

export default MovieBannerCard