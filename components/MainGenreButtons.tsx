import React from 'react'

const MainGenreButtons = () => {
  return (
    <div className="genre-buttons grid grid-cols-3 gap-x-2 gap-y-4 my-6 place-content-center md:hidden">
    <div className="rounded-3xl bg-[#FF10F0] w-fit px-4 py-2"> All</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Action</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Adventure</div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Drama </div>
    <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">African</div>
  </div>
  )
}

export default MainGenreButtons