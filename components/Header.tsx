/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = ({triggerDarkMode}) => {
  return (
    <>
    <header className="header flex w-full justify-between px-6 py-4 bg-none relative lg:absolute top-0 z-10 dark:bg-black dark:text-white">
        <div className="logo lg:w-1/3 relative">
          
          <img src="/assets/logo.png" alt="" />
        </div>
     
        <div className=" flex-row gap-y-10 hidden sm:flex flex-grow justify-between">
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
              className="py-2 pl-10 rounded-xl focus:outline-none border-2 border-[#D4D4D4]"
            ></input>
          </div>
          <div className="pt-2">
            <button 
            onClick={ () => triggerDarkMode()
            }
            >
        <img className='w-[35px]  circle align-middle' src="/assets/profile.png" alt="" />
            </button>
            
          </div>
        </div>
        
      </header>
      <div className="block text-md font-semibold  md:hidden py-2 dark:bg-black dark:text-white">
          <ul className="flex flex-column justify-between px-6 gap-8">
            <li>Movies</li>
            <li>News</li>
            <li>Sounds</li>
            
          </ul>
        </div>
    </>
  )
}

export default Header