/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import { useState } from "react";




export default function Home() {
  const [darkMode, setdarkMode] = useState(false)

  function triggerDarkMode(){

  setdarkMode(!darkMode)
  
  }
  return (
    
    <div className={darkMode? "main relative text-[18px] md:text-[20px] dark": "main relative text-[18px] md:text-[20px] "}>
      <Head>
      <title>Boltfliz</title>
      <meta name="theme-color" content={darkMode? "#121212":"white"}/>
      </Head>
      <Header 
      triggerDarkMode={triggerDarkMode}
      
      />
      <div className="container max-w-full h-screen">
       <Sidebar/>
       <Main/>

        
      </div>
      <MobileMenu
       triggerDarkMode={triggerDarkMode}
      />
    </div>
  );
}
