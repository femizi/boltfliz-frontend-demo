import React, { useRef, useState } from 'react'
import LongImageCard from './LongImageCard'


    
const LongMovieGrid = () => {
const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="longmoviegrid md:hidden scrollbar-none my-6 whitespace-nowrap overflow-y-hidden overflow-x-scroll">
       

        <LongImageCard containerRef={containerRef} />
        <LongImageCard containerRef={containerRef}/>
        <LongImageCard containerRef={containerRef}/>

  
     
    
  </div>
  )
}

export default LongMovieGrid