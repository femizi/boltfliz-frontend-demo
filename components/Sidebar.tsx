/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import SidebarMovieCard from "./SidebarMovieCard";
const Sidebar = () => {
  return (
    <aside className="container__sidebar pl-6 pt-14 pr-6 w-1/3 hidden lg:block bg-[#F8F9FF] dark:bg-black dark:text-white ">
      <div className="new-release-movies grid font-bold pt-8 gap-5 underline hover:cursor-pointer">
        <div className="flex">
          
          <div className="mr-2">
            <img src="/assets/Home.png" alt="" />
          </div>
          <div>Home</div>
        </div>
        <div className="flex">
          
          <div className="mr-2">
            <img src="/assets/movie.png" alt="" />
          </div>
          <div>Movies</div>
        </div>
        <div className="flex">
          
          <div className="mr-2">
            <img src="/assets/paper.png" alt="" />
          </div>
          <div>News</div>
        </div>
        <div className="flex">
          
          <div className="mr-2">
            <img src="/assets/Bookmark.png" alt="" />
          </div>
          <div>Books</div>
        </div>
      </div>
      {/* new release grid ends here */}
      <div className="mt-8">
        <h2 className="font-bold text-[#DC3545]">More on ForeTVHub</h2>
      </div>
      <div className="new-release-movies grid font-bold pt-4 gap-5 underline hover:cursor-pointer">
        <div className="flex">
          <div className="mr-2">
            <img src="/assets/weightlifting.png" alt="" />
          </div>
          <div>Sports</div>
        </div>
        <div className="flex">
          <div className="mr-2">
            <img src="/assets/art.png" alt="" />
          </div>
          <div>Arts</div>
        </div>
      </div>

      {/* end of favorite genre */}
    </aside>
  );
};

export default Sidebar;
