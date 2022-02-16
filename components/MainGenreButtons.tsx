

const MainGenreButtons = () => {
  return (
    <div className="genre-buttons my-6 overscroll-contain md:hidden flex flex-nowrap gap-4 overflow-y-hidden overflow-x-scroll text-[#576371] font-semibold ">
      <div className="rounded-lg bg-[#FF10F0] flex-initial  w-fit px-4 py-2">
        All
      </div>
      <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">
        Action
      </div>
      <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">
        Adventure
      </div>
      <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">
        Drama
      </div>
      <div className="rounded-lg bg-slate-300 flex-initial w-fit px-4 py-2">
        African
      </div>
    </div>
  );
};

export default MainGenreButtons;
