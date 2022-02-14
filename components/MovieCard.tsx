/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";

const MovieCard = () => {
  return (
    <div className="relative inline-block  ">
      <div className="w-full">
       <img className="w-full" src="/assets/image cover 5.png" alt="image-cover" />
      </div>
      <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
        <div className="bg-white  p-2 w-[35px] h-[35px] circle grid place-content-center">
          <Image
            src="/assets/arrow-right.svg"
            width="5px"
            height="11px"
            alt="continue"
          ></Image>
        </div>
        <div className="text-sm border-r border-neutral-200 pr-6">
          Blade runner 2049
          <br />
          <span className="text-xs">2hrs ago</span>
        </div>
        <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
          439mb
        </div>
      </div>
    </div>
  )
}

export default MovieCard