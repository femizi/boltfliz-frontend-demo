import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div className='main'>
      <header className="header flex w-full justify-between px-6 py-4 bg-transparent">
      <div className="logo">
      <div className="dot"></div>
        <h1 className='font-bold'>Botfliz</h1>
      </div>
      <div>
        <ul className='flex flex-column justify-evenly gap-3'>
          <li>Movies</li>   
          <li>Tv shows</li>
          <li>Animations</li>
          <li>Music </li>
        </ul>
      </div>
      <div className='flex flex-row'>
        <div>
          <input type="search" placeholder='search'></input>
        </div>
        <div>
          <Image
          src="/assets/bell.svg"
          alt='notification bell'
          width='23px'
          height='28px'
          ></Image>
        </div>
      </div>
      </header>
      <div className="container max-w-full h-full">
   
    <aside className="container__sidebar pl-6">
        <div className=''>
          <h2>
            New Release
          </h2>
        </div>
        <div className="new-release-movies">
          <div>
            <Image
            src='/assets/image cover 1.png'
            width='326px'
            height='221px'
            alt='image-cover'
            ></Image>
          </div>
          <div></div>
        </div>
    </aside>

  
    <main className="container__main">
        ...
    </main>
</div>

    </div>
  )
}
