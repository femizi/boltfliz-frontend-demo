/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InView } from "react-intersection-observer";

const LongImageCard = ( {containerRef}) => {
  return (
    <InView 
    threshold={1}
    trackVisibility={true}
    delay={100}
    root={containerRef.current}
    
    >
      {({ inView, ref, entry }) => (
        <div ref={ref} className={entry.intersectionRatio=== 1? "rounded-lg  inline-block transition ease-in-out": "rounded-lg  -mx-2 scale-75 transition ease-in-out inline-block"}>
          <a href="#">
            {console.log(entry)}
            <img src="/assets/long.png" alt="image cover" />
            
          </a>
        </div>
      )}
    </InView>
  );
};

export default LongImageCard;
