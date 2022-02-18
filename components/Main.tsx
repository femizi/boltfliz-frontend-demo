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
          showIndicators={false}
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

      <div className="flex justify-between  py-6 md:hidden">
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
        showIndicators={false}
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
      {/* mobile popular movies */}
      <div className="flex  my-6 justify-start font-bold text-2xl md:hidden">
        Popular movies
      </div>
      {/* long grid */}
      <LongMovieGrid />

      <div className="flex justify-between my-6">
        <div className="flex justify-between align-middle gap-2">
          <div className="font-bold text-2xl">Continue Watching</div>
          <div className="font-semi-bold text-sm  place-content-center hidden md:grid">
            43 Movies
          </div>
        </div>
        <div className="flex justify-between gap-4 ">
          <div className="text-sm font-semi-bold  place-content-center hidden md:grid">
            All Movies
          </div>
          <div className="grid place-content-center">
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
      <div className=" grid grid-cols-2 gap-6 md:hidden mb-[120px]">
        <MobileMovieCard />
        <MobileMovieCard />
        <MobileMovieCard />
      </div>
      {/* desktop grid */}

      <div className="   my-6 overscroll-contain md:block whitespace-nowrap gap-4 overflow-y-hidden overflow-x-scroll hidden ">
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
            43 Movies
          </div>
        </div>
        <div className="flex justify-between gap-4 ">
          <div className="text-sm font-semi-bold grid place-content-center">
            All Movies
          </div>
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
      <div className="my-6 overscroll-contain md:block whitespace-nowrap gap-4 overflow-y-hidden overflow-x-scroll hidden ">
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </main>
  );
};

export default Main;
