/* eslint-disable @next/next/no-img-element */
import React from 'react';

const LargeMovieBanner = () => {
  return <div className="mt-4 relative ">
  <div>
    <img src="/assets/image cover 2.png" alt="image cover"></img>
  </div>
  <div className="absolute grid grid-cols-1 pl-11 pb-10 gap-5 bottom-0 left-0  text-white ">
    <div className="text-4xl font-bold">Blade Runner 2049</div>
    <div className="text-sm"> <button className="bg-[#FF10F0] py-2 px-4 rounded-sm"> Watch now</button></div>
  </div>
</div>
  
  
};

export default LargeMovieBanner;
