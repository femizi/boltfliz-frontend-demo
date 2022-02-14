import React from 'react'
import LongImageCard from './LongImageCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LongMovieGrid = () => {
    
      

  return (
    <div className="grid md:hidden grid-cols-2  gap-6">
       

        <LongImageCard/>
        <LongImageCard/>
        <LongImageCard/>

  
     
    
  </div>
  )
}

export default LongMovieGrid