import React from 'react'
import LongImageCard from './LongImageCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LongMovieGrid = () => {
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
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div>
        <Carousel 
        infinite={true}
       
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        centerMode={true}
        containerClass="carousel-container "
        sliderClass='grid place-content-center gap-4'
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>

        <LongImageCard/>
        <LongImageCard/>
        <LongImageCard/>

        </Carousel>
  
     
    
  </div>
  )
}

export default LongMovieGrid