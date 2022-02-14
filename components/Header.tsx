/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <>
    <header className="header flex w-full justify-between px-6 py-4 bg-none relative lg:absolute top-0 z-10">
        <div className="logo lg:w-1/3 relative">
          
          <h1 className="font-bold text-2xl relative">
            <span className="dot absolute w-[10px] h-[10px]  -left-3 inset-y-3 circle bg-[#FF10F0]"> </span>
            Botfliz</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-column justify-evenly gap-10">
            <li>Movies</li>
            <li>Tv shows</li>
            <li>Animations</li>
            <li>Music </li>
          </ul>
        </div>
        <div className=" flex-row gap-6 hidden sm:flex">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <img src="/assets/search.svg" alt="search" />
              </button>
            </span>
            <input
              type="search"
              placeholder="Search... "
              className="py-2 pl-10 rounded-md focus:outline-none"
            ></input>
          </div>
          <div className="pt-2">
            <button>
            <img className="w-[23px] h-[28px]" src="/assets/moon.svg" alt="bell" />
            </button>
            
          </div>
        </div>
        
      </header>
      <div className="block text-md  md:hidden py-5">
          <ul className="flex flex-column justify-between px-6 gap-8">
            <li>Movies</li>
            <li>Tv shows</li>
            <li>Animations</li>
            
          </ul>
        </div>
    </>
  )
}

export default Header