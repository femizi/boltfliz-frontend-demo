/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import LargeMovieBanner from "./LargeMovieBanner";
import LongMovieGrid from "./LongMovieGrid";
import MainGenreButtons from "./MainGenreButtons";
import MobileMovieCard from "./MobileMovieCard";
import MovieCard from "./MovieCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieBannerCard from "./MovieBannerCard";
import MobileGrid from "./MobileGrid";
import Arrowprev from "./Arrowprev";
import ArrowNext from "./ArrowNext";

const Main = () => {
  return (
    <main className="container__main px-6 overscroll-auto overflow-auto bg-white lg:bg-[#EEF1FB]  dark:bg-black dark:text-white">
      {/* large movie banner  doesn't show on mobile*/}
      <div className="lg:mt-20 mt-16 border-special pt-1 hidden md:block">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          renderArrowPrev={(onClickHandler, hasPrev: boolean, label: string) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{
                  top: "50%",
                  bottom: "auto",
                  zIndex: 2,
                  padding: ".4em",
                  position: "absolute",
                }}
              >
                <Arrowprev />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext: boolean, label: string) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{
                  top: "50%",
                  bottom: "auto",
                  zIndex: 2,
                  padding: ".4em",
                  position: "absolute",
                  right: "0",
                }}
              >
                <ArrowNext />
              </button>
            )
          }
        >
          <LargeMovieBanner />
          <LargeMovieBanner />
          <LargeMovieBanner />
        </Carousel>
      </div>
      {/* start of grid rows */}

      <div className="flex justify-between py-4 md:py-6 md:hidden">
        <div className="font-bold"> New Release</div>
        <div className=""> See More</div>
      </div>
      {/* Mobile Carousel */}
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        autoPlay
        showStatus={false}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev: boolean, label: string) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                top: "40%",
                bottom: "auto",
                zIndex: 2,
                padding: ".4em",
                position: "absolute",
              }}
            >
              <Arrowprev />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext: boolean, label: string) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                top: "40%",
                bottom: "auto",
                zIndex: 2,
                padding: ".4em",
                position: "absolute",
                right: "0",
              }}
            >
              <ArrowNext />
            </button>
          )
        }
      >
        <MovieBannerCard />
        <MovieBannerCard />
        <MovieBannerCard />
      </Carousel>
      {/* genre buttons */}
      <MainGenreButtons />
    

      <div className="flex justify-between my-5 md:my-6">
        <div className="flex justify-between align-middle gap-2">
          <div className="font-bold text-2xl">News</div>
          
        </div>
        <div className="flex justify-between gap-4 ">
          
          
        </div>
      </div>

      {/* mobile grid */}
      <div className=" grid grid-cols-2 gap-6 md:hidden mb-[120px]">
      <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      {/* desktop grid */}

      <div className="   hidden grid-cols-2 gap-3 md:grid md:grid-cols-3">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      {/* end of first grid */}

      <div className="hidden md:flex  justify-between my-6">
        <div className="flex justify-between align-middle gap-2">
          <div className="font-bold text-3xl">Popular Movies</div>
          <div className="font-semi-bold text-sm grid place-content-center">
            
          </div>
        </div>
        <div className="flex justify-between gap-4 ">
         
          <div>
          
          </div>
        </div>
      </div>
      {/* second grid */}
      <div className="hidden grid-cols-2 gap-3 md:grid md:grid-cols-3 ">
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
        <MobileMovieCard/>
      </div>
        {/* mobile popular movies */}
        <div className="flex  my-5 justify-start font-bold text-2xl md:hidden">
        Popular
      </div>
      {/* long grid */}
      <LongMovieGrid />
    </main>
  );
};

export default Main;
