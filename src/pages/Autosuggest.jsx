import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

export default function Autosuggest() {
  const [cross, setCross] = useState(false);
  function updateCross(e) {
    if (e.target.value === "" || e.target.value === " ") setCross(false);
    else setCross(true);
  }
  return (
    <div className="shadow-sm flex items-center px-2 py-4 lg:hidden w-full">
      {/* Arrow*/}
      <Link to="/" className="w-8 cursor-pointer">
        <svg
          className="header-icon menu-icon w-full h-full"
          viewBox="0 0 24 24"
        >
          <path
            fill="#3E4152"
            fillRule="evenodd"
            d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"
          ></path>
        </svg>
      </Link>
      {/* Input Box */}
      <div className="w-full mx-3">
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id="search"
            placeholder="Search for brands & products"
            className="w-full text-sm outline-none"
            onChange={updateCross}
          />
          {cross && (
            <div className="w-7">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <defs>
                  <path id="a" d="M0 0h16v16H0z"></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path fill="#000" d="M15.733 12v-.001z"></path>
                  <g transform="translate(4 4)">
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a"></use>
                    </mask>
                    <path
                      fill="#282C3F"
                      d="M1.067 8a6.933 6.933 0 1113.866 0A6.933 6.933 0 011.067 8zM0 8a8 8 0 1016 0A8 8 0 000 8z"
                      mask="url(#b)"
                    ></path>
                  </g>
                  <path
                    fill="#282C3F"
                    d="M14.824 8.422L12 11.247 9.175 8.422a.532.532 0 00-.754.754L11.246 12 8.42 14.825a.532.532 0 00.754.754l2.824-2.824 2.82 2.82a.535.535 0 00.754-.001.535.535 0 000-.754L12.753 12l2.825-2.824a.534.534 0 000-.754.535.535 0 00-.754 0z"
                  ></path>
                  <path d="M0 0h24v24H0z" opacity="0.05"></path>
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
      {/* Search icon */}
      <div className="w-8 cursor-pointer">
        <svg
          className="search-icon w-full h-full"
          stroke="#ff356e"
          strokeWidth="1px"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ff356e"
            fillRule="evenodd"
            d="M3.438 9.754a6.415 6.415 0 016.408-6.409 6.415 6.415 0 016.409 6.409 6.416 6.416 0 01-6.409 6.408 6.416 6.416 0 01-6.408-6.408M21.816 20.87l-5.974-6.02a7.839 7.839 0 001.88-5.097c0-4.343-3.534-7.875-7.876-7.875-4.342 0-7.875 3.532-7.875 7.875 0 4.342 3.533 7.875 7.875 7.875a7.837 7.837 0 004.946-1.753l5.983 6.029a.73.73 0 001.037.004.733.733 0 00.004-1.038"
          ></path>
        </svg>
      </div>
    </div>
  );
}

// <svg width="30" height="30" viewBox="0 0 24 24">
//   <defs>
//     <path id="a" d="M0 0h16v16H0z"></path>
//   </defs>
//   <g fill="none" fill-rule="evenodd">
//     <path d="M0 0h24v24H0z"></path>
//     <path fill="#000" d="M15.733 12v-.001z"></path>
//     <g transform="translate(4 4)">
//       <mask id="b" fill="#fff">
//         <use xlink:href="#a"></use>
//       </mask>
//       <path
//         fill="#282C3F"
//         d="M1.067 8a6.933 6.933 0 1113.866 0A6.933 6.933 0 011.067 8zM0 8a8 8 0 1016 0A8 8 0 000 8z"
//         mask="url(#b)"
//       ></path>
//     </g>
//     <path
//       fill="#282C3F"
//       d="M14.824 8.422L12 11.247 9.175 8.422a.532.532 0 00-.754.754L11.246 12 8.42 14.825a.532.532 0 00.754.754l2.824-2.824 2.82 2.82a.535.535 0 00.754-.001.535.535 0 000-.754L12.753 12l2.825-2.824a.534.534 0 000-.754.535.535 0 00-.754 0z"
//     ></path>
//     <path d="M0 0h24v24H0z" opacity="0.05"></path>
//   </g>
// </svg>
