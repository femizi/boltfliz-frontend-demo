/* eslint-disable @next/next/no-img-element */
const MainGenreButtons = () => {
  return (
    <div className="genre-buttons my-6 scrollbar-none overscroll-contain md:hidden flex flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll text-[#576371] font-semibold text-sm ">
      <div className=" flex-initial  w-fit ">
      <div className="flex px-4 py-2 bg-[#Dc3545] rounded-md text-white ">
          
          <div className="mr-2">
            <img src="/assets/Home.png" alt="" />
          </div>
          <div className="grid place-content-center">Home</div>
        </div>
      </div>
      <div className=" flex-initial w-fit ">
      <div className="flex px-4 py-2 bg-slate-300 rounded-md  ">
          
          <div className="mr-2">
            <img src="/assets/movie.png" alt="" />
          </div>
          <div className="grid place-content-center">Movie</div>
        </div>
      </div>
      <div className=" flex-initial w-fit ">
      <div className="flex px-4 py-2 bg-slate-300 rounded-md  ">
          
          <div className="mr-2">
            <img src="/assets/Paper.png" alt="" />
          </div>
          <div className="grid place-content-center">News</div>
        </div>
      </div>
      <div className=" flex-initial w-fit ">
      <div className="flex px-4 py-2 bg-slate-300 rounded-md  ">
          
          <div className="mr-2">
            <img src="/assets/Bookmark.png" alt="" />
          </div>
          <div className="grid place-content-center">Books</div>
        </div>
      </div>
      <div className=" flex-initial w-fit ">
      <div className="flex px-4 py-2 bg-slate-300 rounded-md  ">
          
          <div className="mr-2">
            <img src="/assets/weightlifting.png" alt="" />
          </div>
          <div className="grid place-content-center">Sports</div>
        </div>
      </div>
    </div>
  );
};

export default MainGenreButtons;
