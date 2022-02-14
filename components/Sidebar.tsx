/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from "next/image";
import SidebarMovieCard from './SidebarMovieCard';
const Sidebar = () => {
  return <aside className="container__sidebar pl-6 pt-14 pr-6 w-1/3 hidden lg:block ">
  <div className="my-2">
    <h2 className="font-bold">New Release</h2>
  </div>
  <div className="new-release-movies grid gap-5">
    <SidebarMovieCard/>
    <SidebarMovieCard/>
  </div>
  {/* new release grid ends here */}
  <div className="my-5">
    <h2 className="font-bold">Favorite Genre</h2>
  </div>
  <div className="grid grid-cols-3 gap-2 text-white text-sm">
    <div className="rounded-3xl bg-rose-300 w-fit px-2 py-1">
      Action
    </div>
    <div className="rounded-3xl bg-pink-300 w-fit px-2 py-1">
      Sci-fi
    </div>
    <div className="rounded-3xl bg-orange-300 w-fit px-2 py-1">
      Drama
    </div>
    <div className="rounded-3xl bg-teal-300 w-fit px-2 py-1">
      Adventure
    </div>
    <div className="rounded-3xl bg-blue-300 w-fit px-2 py-1">
      African
    </div>
  </div>
  
  
  {/* end of favorite genre */}
</aside>;
};

export default Sidebar;
