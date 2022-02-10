import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileMovieCard from './MobileMovieCard';
const MobileGrid = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
      };

  return (
    <Carousel 
    infinite={true}
       
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        
        containerClass="carousel-container "
        sliderClass='md:grid hidden md:grid-cols-2 lg:grid-cols-3 md:gap-6'
        removeArrowOnDeviceType={["tablet", "mobile"]}
    responsive={responsive}
    >
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>

    </Carousel>
  )
}

export default MobileGrid