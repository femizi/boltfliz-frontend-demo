/* eslint-disable @next/next/no-img-element */
import React from "react";

const MobileMenu = ({ triggerDarkMode }) => {
  return (
    <div className="mobile-buttons md:hidden fixed bottom-0 inset-x-0 bg-white py-2 dark:bg-black  px-6 flex justify-between text-sm">
      <div>
        <button id="home" className="circle bg-white dark:bg-inherit p-3 outline-t-2 outline-neutral">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white fill-black"
              d="M3 8L12 1L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="dark:fill-white fill-black"
              d="M9 17V7H15V17"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <button id="heart" className="circle bg-white dark:bg-inherit p-3">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white fill-black"
              d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.90831 2.5783 8.50903 1.9987 7.05 1.9987C5.59097 1.9987 4.19169 2.5783 3.16 3.60999C2.12831 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.12831 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7564 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7564 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z"
              stroke="#BFBDBB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <button id="search" className="circle bg-[#FF10F0]   p-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white fill-black"
              d="M6.81429 0.666016C8.48894 0.666016 10.095 1.33127 11.2792 2.51543C12.4633 3.69959 13.1286 5.30565 13.1286 6.9803C13.1286 8.5443 12.5554 9.98202 11.6131 11.0894L11.8754 11.3517H12.6429L17.5 16.2089L16.0429 17.666L11.1857 12.8089V12.0414L10.9234 11.7792C9.816 12.7214 8.37829 13.2946 6.81429 13.2946C5.13963 13.2946 3.53357 12.6293 2.34941 11.4452C1.16525 10.261 0.5 8.65495 0.5 6.9803C0.5 5.30565 1.16525 3.69959 2.34941 2.51543C3.53357 1.33127 5.13963 0.666016 6.81429 0.666016V0.666016ZM6.81429 2.60887C4.38571 2.60887 2.44286 4.55173 2.44286 6.9803C2.44286 9.40887 4.38571 11.3517 6.81429 11.3517C9.24286 11.3517 11.1857 9.40887 11.1857 6.9803C11.1857 4.55173 9.24286 2.60887 6.81429 2.60887Z"
              fill="#686B6F"
            />
          </svg>
        </button>
      </div>
      <div>
        <button id="music" className="circle bg-white dark:bg-inherit p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white fill-black"
              d="M8.57143 20.5455C8.57143 22.4541 6.65143 24 4.28571 24C1.92 24 0 22.4541 0 20.5455C0 18.6387 1.92 17.0911 4.28571 17.0911C6.65143 17.0911 8.57143 18.6387 8.57143 20.5455ZM24 17.0911C24 18.9997 22.08 20.5455 19.7143 20.5455C17.3486 20.5455 15.4286 18.9997 15.4286 17.0911C15.4286 15.1825 17.3486 13.6366 19.7143 13.6366C22.08 13.6366 24 15.1825 24 17.0911Z"
              fill="#BDBDBD"
            />
            <path
              className="dark:fill-white fill-black"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.2857 17.091V1.5459H24V17.091H22.2857ZM8.5714 3.27314V20.5455H6.85712V3.27314H8.5714Z"
              fill="#BDBDBD"
            />
            <path
              className="dark:fill-white fill-black"
              d="M6.85715 3.10905C6.85714 2.68086 7.01499 2.26793 7.30008 1.95037C7.58516 1.63281 7.97715 1.43327 8.4 1.39045L22.1143 0.00865807C22.3527 -0.0154812 22.5934 0.0109922 22.821 0.0863708C23.0486 0.161749 23.258 0.284359 23.4357 0.446292C23.6134 0.608224 23.7554 0.805883 23.8526 1.02652C23.9498 1.24715 24 1.48587 24 1.72726V3.27314L6.85715 5.00038V3.10905Z"
              fill="#BDBDBD"
            />
          </svg>
        </button>
      </div>
      <div>
        <button
        id="darkmode"
          onClick={() => triggerDarkMode()}
          className="circle bg-white dark:bg-inherit p-3"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-white fill-black"
              d="M16.4555 0C17.7926 1.9793 18.5061 4.31379 18.5039 6.7024C18.5039 13.3828 13.0294 18.7984 6.2757 18.7984C4.06764 18.8025 1.89943 18.2103 0 17.0844C2.08323 21.1852 6.37171 24 11.327 24C18.3263 24 24 18.3876 24 11.464C24 6.3468 20.8983 1.9484 16.4555 0Z"
              fill="#BDBDBD"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
