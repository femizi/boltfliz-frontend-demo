import React, { useState } from 'react'
import LongImageCard from './LongImageCard'
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

    
const LongMovieGrid = () => {
    
    // const [items, setItems] = useState(getItems)
    // const [selected, setSelected] = useState([])
    // const [position, setPosition] = useState(0)
    // const isItemSelected = (id:string) => !!selected.find((el) => el === id);
    // const handleClick =
    // (id:string) =>
    // ({ getItemById, scrollToItem }) => {
    //   const itemSelected = isItemSelected(id);

    //   setSelected((currentSelected) =>
    //     itemSelected
    //       ? currentSelected.filter((el) => el !== id)
    //       : currentSelected.concat(id)
    //   );
    // };

  return (
    <div className="grid md:hidden grid-cols-2  gap-6">
       

        <LongImageCard/>
        <LongImageCard/>
        <LongImageCard/>

  
     
    
  </div>
  )
}

export default LongMovieGrid