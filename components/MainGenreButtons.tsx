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
    // <div className="genre-buttons grid grid-cols-3 gap-x-2 gap-y-4 my-6 place-content-center md:hidden">
    <Carousel
    infinite={true}
  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
    responsive={responsive}>
    <div className="rounded-3xl bg-[#FF10F0] w-fit px-4 py-2"> All</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Action</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Adventure</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Drama </div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">African</div>
    </Carousel>
//   </div>
  )
}

export default MainGenreButtons