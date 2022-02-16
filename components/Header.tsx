/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = ({triggerDarkMode}) => {
  return (
    <>
    <header className="header flex w-full justify-between px-6 py-4 bg-none relative lg:absolute top-0 z-10 dark:bg-black dark:text-white">
        <div className="logo lg:w-1/3 relative">
          
          <h1 className="font-bold text-2xl relative dark:text-white">
            <span className="dot absolute w-[10px] h-[10px]  -left-3 inset-y-3 circle bg-[#FF10F0]"> </span>
            Boltfliz</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-column justify-evenly gap-10 md:gap-6">
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
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='dark:fill-black' d="M6.81429 0.666016C8.48894 0.666016 10.095 1.33127 11.2792 2.51543C12.4633 3.69959 13.1286 5.30565 13.1286 6.9803C13.1286 8.5443 12.5554 9.98202 11.6131 11.0894L11.8754 11.3517H12.6429L17.5 16.2089L16.0429 17.666L11.1857 12.8089V12.0414L10.9234 11.7792C9.816 12.7214 8.37829 13.2946 6.81429 13.2946C5.13963 13.2946 3.53357 12.6293 2.34941 11.4452C1.16525 10.261 0.5 8.65495 0.5 6.9803C0.5 5.30565 1.16525 3.69959 2.34941 2.51543C3.53357 1.33127 5.13963 0.666016 6.81429 0.666016V0.666016ZM6.81429 2.60887C4.38571 2.60887 2.44286 4.55173 2.44286 6.9803C2.44286 9.40887 4.38571 11.3517 6.81429 11.3517C9.24286 11.3517 11.1857 9.40887 11.1857 6.9803C11.1857 4.55173 9.24286 2.60887 6.81429 2.60887Z" fill="#686B6F"/>
</svg>

              </button>
            </span>
            <input
              type="search"
              placeholder="Search... "
              className="py-2 pl-10 rounded-md focus:outline-none border-2 border-[#D4D4D4]"
            ></input>
          </div>
          <div className="pt-2">
            <button 
            onClick={ () => triggerDarkMode()
            }
            >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='dark:fill-white fill-black' d="M16.4555 0C17.7926 1.9793 18.5061 4.31379 18.5039 6.7024C18.5039 13.3828 13.0294 18.7984 6.2757 18.7984C4.06764 18.8025 1.89943 18.2103 0 17.0844C2.08323 21.1852 6.37171 24 11.327 24C18.3263 24 24 18.3876 24 11.464C24 6.3468 20.8983 1.9484 16.4555 0Z" fill="#BDBDBD"/>
</svg>

            </button>
            
          </div>
        </div>
        
      </header>
      <div className="block text-md font-semibold  md:hidden py-5 dark:bg-black dark:text-white">
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