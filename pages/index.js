import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main relative">
      <header className="header flex w-full justify-between px-6 py-4 bg-none relative md:absolute top-0 z-10">
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
            <img className="w-[23px] h-[28px]" src="/assets/bell.svg" alt="bell" />
            </button>
            
          </div>
        </div>
        
      </header>
      <div className="block md:hidden py-5">
          <ul className="flex flex-column justify-between px-6 gap-10">
            <li>Movies</li>
            <li>Tv shows</li>
            <li>Animations</li>
            
          </ul>
        </div>
      <div className="container max-w-full h-screen">
        <aside className="container__sidebar pl-6 pt-14 pr-6 w-1/3 hidden lg:block ">
          <div className="my-2">
            <h2 className="font-bold">New Release</h2>
          </div>
          <div className="new-release-movies grid gap-5">
            <div className="relative">
              <div className="w-full ">
              <img className="w-full" src="/assets/image cover 1.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex  justify-between p-4 font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                    
                  ></Image>
                </div>
                <div className="text-[18px] border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-sm">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 1.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex  justify-between p-4 font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-[18px] border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-sm">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
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
          <div className="my-4 flex gap-2">
            <img src="assets/add.svg" alt="add" />
            <h2 className="font-bold">Add your favorite Genre</h2>
          </div>
          <div className="grid grid-cols-3 gap-2 text-white text-sm">
            <div className="rounded-3xl bg-blue-500 w-fit px-2 py-1">Crime</div>
            <div className="rounded-3xl bg-yellow-500 w-fit px-2 py-1">
              Comedy
            </div>
            <div className="rounded-3xl bg-red-500 w-fit px-2 py-1">
              Thriller
            </div>
          </div>
          {/* end of favorite genre */}
        </aside>

        <main className="container__main px-6 overflow-auto bg-white lg:bg-[#EEF1FB] ">
          {/* large movie banner */}
          <div className="mt-20 border-special pt-1 hidden md:block"> 
          <div className="mt-4 relative ">
            <div>
              <img src="/assets/image cover 2.png" alt="image cover"></img>
            </div>
            <div className="absolute grid grid-cols-1 pl-11 pb-10 gap-5 bottom-0 left-0  text-white ">
              <div className="text-4xl font-bold">Blade Runner 2049</div>
              <div className="text-sm"> <button className="bg-[#FF10F0] py-2 px-4 rounded-sm"> Watch now</button></div>
            </div>
          </div>
          </div>
          {/* start of grid rows */}
          <div className="flex justify-between  py-6 md:hidden">
            <div className="font-bold"> New Release</div>
            <div className="font-semibold"> See More</div>
          </div>
          <div className="relative md:hidden">
              <div className="w-full rounded-sm">
               <img className="w-full rounded-md" src="/assets/image cover 4.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex  justify-between p-4 font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-[18px] border-r border-neutral-200 pr-6">
                  Money Heist
                  <br />
                  <span className="text-sm">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            
            {/* genre buttons */}
          <div className="genre-buttons flex justify-between gap-8 my-6 place-content-center md:hidden">
            <div className="rounded-3xl bg-[#FF10F0] w-fit px-4 py-2"> All</div>
            <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Action</div>
            <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Adventure</div>
            <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">Drama </div>
            <div className="rounded-3xl bg-slate-300 w-fit px-4 py-2">African</div>
          </div>
          {/* mobile popular movies */}
          <div className="flex my-6 justify-start font-bold text-3xl md:hidden">
            Popular movies
          </div>
          {/* long grid */}
          <div>
            <div className="grid place-content-center md:hidden">
              <a href="#">
                <img src="/assets/long.png" alt="image cover" />
              </a>
            </div>
          </div>


          <div className="flex justify-between my-6">
            <div className="flex justify-between align-middle gap-2">
              <div className="font-bold text-3xl">Continue Watching</div>
              <div className="font-semi-bold text-sm grid place-content-center hidden md:block">43 Movies</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-sm font-semi-bold grid place-content-center hidden md:block">All Movies</div>
              <div>
                <button>
                <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </button>
              
              </div>
            </div>
          </div>
          
          {/* mobile grid */}
          <div className=" grid grid-cols-3 gap-6 md:hidden">
          <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 6 small.png" alt="image-cover" />
              </div>
              <div className="absolute pr-3 top-0 right-0 pt-3">
              <div className="absolute top-0 right-0    justify-between pr-3 pt-3  font-semibold ">
                
                <div className="text-black bg-white rounded-md p-1 h-fit text-xs">
                  439mb
                </div>
              </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 8 small.png" alt="image-cover" />
              </div>
              <div className="absolute pt-3 pr-3 top-0 right-0">
                
                <div className="text-black  font-semibold bg-white rounded-md p-1 h-fit text-xs">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 8 small.png" alt="image-cover" />
              </div>
              <div className="absolute top-0 right-0    pt-3 pr-3  font-semibold ">
                
                <div className="text-black bg-white rounded-md p-1 h-fit text-xs">
                  439mb
                </div>
              </div>
            </div>
          </div>
          {/* desktop grid */}
          <div className="md:grid hidden md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 5.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 3.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 4.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
          </div>
        {/* end of first grid */}



          <div className="flex justify-between my-6">
            <div className="flex justify-between align-middle gap-2">
              <div className="font-bold text-3xl">Popular Movies</div>
              <div className="font-semi-bold text-sm grid place-content-center">43 Movies</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-sm font-semi-bold grid place-content-center">All Movies</div>
              <div>
                <button>
                <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </button>
              
              </div>
            </div>
          </div>
          {/* second grid */}
          <div className="md:grid hidden md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 5.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 3.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full">
               <img className="w-full" src="/assets/image cover 4.png" alt="image-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex gap-2  justify-between p-2 rounded-t-md font-semibold text-white backdrop-blur-sm backdrop-saturate-150 bg-white/30">
                <div className="bg-white rounded-lg p-2 w-[35px] h-[35px] circle grid place-content-center">
                  <Image
                    src="/assets/arrow-right.svg"
                    width="5px"
                    height="11px"
                    alt="continue"
                  ></Image>
                </div>
                <div className="text-sm border-r border-neutral-200 pr-6">
                  Blade runner 2049
                  <br />
                  <span className="text-xs">2hrs ago</span>
                </div>
                <div className="text-black bg-white rounded-md p-1 h-fit text-sm">
                  439mb
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="mobile-buttons md:hidden fixed bottom-0 inset-x-0 bg-white py-4 px-6 flex justify-between text-sm">
        <div><button>
          <img src="/assets/home.svg"></img>
          </button></div>
        <div><button>
        <img src="/assets/heart.svg"></img>
          </button></div>
        <div><button>
        <img className="circle bg-[#FF10F0] p-3" src="/assets/search.svg"></img>
          </button></div>
        <div><button>
        <img src="/assets/music.svg"></img>
          </button></div>
        <div><button>
        <img src="assets/moon.svg"></img>
          </button></div>
      </div>
    </div>
  );
}
