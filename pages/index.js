/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Header from '../components/Header'




export default function Home() {
  return (
    <div className="main relative text-[18px] md:text-[20px]">
      <Header/>
      <div className="container max-w-full h-screen">
       <Sidebar/>
       <Main/>

        
      </div>
      <div className="mobile-buttons md:hidden fixed bottom-0 inset-x-0 bg-white py-2 px-6 flex justify-between text-sm">
        <div><button>
          <img className="circle bg-white p-3" src="/assets/home.svg" alt="home-button"></img>
          </button></div>
        <div><button>
        <img className="circle bg-white p-3" src="/assets/heart.svg" alt="favorites-button"></img>
          </button></div>
        <div><button>
        <img  className="circle bg-[#FF10F0] p-3" src="/assets/search.svg" alt="search-button"></img>
          </button></div>
        <div><button>
        <img className="circle bg-white p-3" src="/assets/music.svg" alt="music-button"></img>
          </button></div>
        <div><button>
        <img className="circle bg-white p-3" src="assets/moon.svg" alt="dark-mode-button"></img>
          </button></div>
      </div>
    </div>
  );
}
