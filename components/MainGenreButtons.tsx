import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainGenreButtons = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
  return (
    <div className="genre-buttons my-6 overscroll-contain md:hidden flex flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll ">
   
    <div className="rounded-lg bg-[#FF10F0] flex-initial  w-fit px-4 py-2"> All</div>
    <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">Action</div>
    <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">Adventure</div>
    <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">Drama </div>
    <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">African</div>
   
   </div>
  )
}

export default MainGenreButtons