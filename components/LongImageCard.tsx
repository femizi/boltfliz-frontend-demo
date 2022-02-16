/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InView } from "react-intersection-observer";

const LongImageCard = ( {containerRef}) => {
  return (
    <InView 
    threshold={0.75}
    trackVisibility={true}
    delay={100}
    root={containerRef.current}
    
    >
      {({ inView, ref, entry }) => (
        <div ref={ref} className={inView? "scale-125 mx-9 inline-block transition ease-in-out": "mx-9 scale-95 transition ease-in-out inline-block"}>
          <a href="#">
            <img src="/assets/long.png" alt="image cover" />
            
          </a>
        </div>
      )}
    </InView>
  );
};

export default LongImageCard;
