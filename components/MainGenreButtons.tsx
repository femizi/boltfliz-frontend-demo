const MainGenreButtons = () => {
  return (
    <div className="genre-buttons my-6 scrollbar-none overscroll-contain md:hidden flex flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll text-[#576371] font-semibold text-sm ">
      <div className=" flex-initial  w-fit ">
        <button className="rounded-lg bg-[#FF10F0] text-white px-4 py-2 font-semibold ">All</button>
      </div>
      <div className=" flex-initial w-fit ">
        <button className="rounded-lg bg-slate-300 px-4 py-2 font-semibold">
          Action
        </button>
      </div>
      <div className=" flex-initial w-fit ">
        <button className="rounded-lg bg-slate-300  px-4 py-2 font-semibold">
          Adventure
        </button>
      </div>
      <div className=" flex-initial w-fit ">
        <button className="rounded-lg bg-slate-300  px-4 py-2 font-semibold">
          Drama
        </button>
      </div>
      <div className=" flex-initial w-fit ">
        <button className="rounded-lg bg-slate-300  px-4 py-2 font-semibold">
          African
        </button>
      </div>
    </div>
  );
};

export default MainGenreButtons;
