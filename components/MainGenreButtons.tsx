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
    <div className="genre-buttons my-6 place-content-center md:hidden">
    <Carousel
  
  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container block md:hidden"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style mr-5"
  itemClass="carousel-item-padding-40-px"
    responsive={responsive}>
    <div className="rounded-lg bg-[#FF10F0] w-fit px-4 py-2"> All</div>
    <div className="rounded-lg bg-slate-300 w-fit px-4 py-2">Action</div>
    <div className="rounded-lg bg-slate-300 w-fit px-4 py-2">Adventure</div>
    <div className="rounded-lg bg-slate-300 w-fit px-4 py-2">Drama </div>
    <div className="rounded-lg bg-slate-300 w-fit px-4 py-2">African</div>
    </Carousel>
   </div>
  )
}

export default MainGenreButtons