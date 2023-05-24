import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export default function Navbar(props) {
  return (
    <div className="shadow-md">
      <div className="p-4 lg:hidden flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <svg
            onClick={() => props.updateSB()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="ml-2">
            <img src={Logo} alt="" className="ml-3 w-10" />
          </span>
        </Link>
        {/* Show the icons */}
        <div className="grid grid-rows-1 grid-cols-4 gap-4 h-6">
          {/* Install App */}
          <svg
            viewBox="0 0 16 18"
            height="85%"
            width="100%"
            className="cursor-pointer"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M-4-3h24v24H-4z"></path>
              <g fill="#3E4152">
                <path d="M3.23 1.3c-.788 0-1.43.61-1.43 1.359V15.34c0 .75.642 1.359 1.43 1.359h9.54c.788 0 1.43-.61 1.43-1.359V2.66c0-.75-.642-1.359-1.43-1.359H3.23zM13 18H3C1.621 18 .5 16.937.5 15.632V2.368C.5 1.063 1.621 0 3 0h10c1.379 0 2.5 1.063 2.5 2.368v13.264C15.5 16.937 14.379 18 13 18z"></path>
                <path d="M10.25 8.25h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v1.5a.75.75 0 001.5 0v-1.5h1.5a.75.75 0 000-1.5"></path>
              </g>
            </g>
          </svg>
          {/* Search */}
          <Link to="/autosuggest">
            <svg
              viewBox="0 0 24 24"
              height="100%"
              width="100%"
              className="cursor-pointer"
            >
              <path
                fill="#3E4152"
                fillRule="evenodd"
                d="M3.438 9.754a6.415 6.415 0 016.408-6.409 6.415 6.415 0 016.409 6.409 6.416 6.416 0 01-6.409 6.408 6.416 6.416 0 01-6.408-6.408M21.816 20.87l-5.974-6.02a7.839 7.839 0 001.88-5.097c0-4.343-3.534-7.875-7.876-7.875-4.342 0-7.875 3.532-7.875 7.875 0 4.342 3.533 7.875 7.875 7.875a7.837 7.837 0 004.946-1.753l5.983 6.029a.73.73 0 001.037.004.733.733 0 00.004-1.038"
              ></path>
            </svg>
          </Link>
          {/* Wishlist */}
          <svg
            viewBox="0 0 24 24"
            height="100%"
            width="100%"
            className="cursor-pointer"
            onClick={() => props.updateWL()}
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#3E4152">
                <path d="M8.1703,4.473425 C6.9537,4.473425 5.8134,4.946625 4.95975,5.805525 C4.10435,6.666175 3.63325,7.815575 3.63325,9.042675 C3.63325,10.269775 4.10435,11.419525 4.95975,12.280175 L12,19.362425 L19.0406,12.279825 C19.89565,11.419525 20.36675,10.270125 20.36675,9.042675 C20.36675,7.815575 19.89565,6.665825 19.0406,5.805875 C19.0406,5.805875 19.0406,5.805525 19.04025,5.805525 C18.1866,4.946625 17.0463,4.473425 15.8297,4.473425 C14.6138,4.473425 13.4742,4.946275 12.62055,5.804475 C12.29225,6.134525 11.70845,6.134875 11.3798,5.804475 C10.5258,4.946275 9.3862,4.473425 8.1703,4.473425 L8.1703,4.473425 Z M12.02835,21.276575 L11.972,21.276575 C11.6304,21.276575 11.2965,21.137625 11.05605,20.895075 L3.71865,13.513925 C2.53495,12.323225 1.88325,10.735275 1.88325,9.042675 C1.88325,7.350075 2.53495,5.762475 3.71865,4.571775 C4.9034,3.379675 6.48435,2.723425 8.1703,2.723425 C9.5759,2.723425 10.90905,3.179825 12,4.022625 C13.0913,3.179825 14.4241,2.723425 15.8297,2.723425 C17.516,2.723425 19.09695,3.379675 20.2817,4.572125 C21.46505,5.762475 22.11675,7.350075 22.11675,9.042675 C22.11675,10.735625 21.46505,12.323225 20.2817,13.513925 L12.94325,20.895775 C12.6993,21.141475 12.3745,21.276575 12.02835,21.276575 L12.02835,21.276575 Z"></path>
              </g>
            </g>
          </svg>
          {/* Cart */}
          <Link to="/checkout/cart">
            <svg
              viewBox="0 0 24 24"
              height="100%"
              width="100%"
              className="cursor-pointer"
            >
              <path
                fill="#3E4152"
                fillRule="evenodd"
                d="M4.012 20.718L5.246 7.314H7.27v1.763a.733.733 0 101.466 0V7.314h6.528v1.763a.733.733 0 001.466 0V7.314h2.024l1.234 13.404H4.012zM12 3.282c1.56 0 2.865 1.1 3.187 2.565H8.813A3.268 3.268 0 0112 3.282zm8.15 3.228a.733.733 0 00-.73-.663h-2.747A4.734 4.734 0 0012 1.816a4.734 4.734 0 00-4.673 4.03H4.58a.733.733 0 00-.73.664L2.475 21.38a.734.734 0 00.73.804h17.59a.733.733 0 00.73-.803L20.15 6.51z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-evenly h-20">
        <Link to="/" className="w-14 h-14 pt-2 cursor-pointer">
          <img src={Logo} alt="" />
        </Link>
        <div className="uppercase font-medium ml-10 text-sm">
          <span className="mr-10 cursor-pointer">Men</span>
          <span className="mr-10 cursor-pointer">Women</span>
          <span className="mr-10 cursor-pointer">Kids</span>
          <span className="mr-10 cursor-pointer">Home & Living</span>
          <span className="mr-10 cursor-pointer">Beauty</span>
          <span className="mr-10 cursor-pointer">Studio</span>
        </div>
        <div className="relative bg-[#F5F5F6] h-10 flex items-center w-2/6 px-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#282C3F"
            className="w-6 h-6 absolute"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="indent-6 w-full outline-none ml-2 bg-transparent text-sm"
          />
        </div>
        <div className="flex items-center font-medium text-sm">
          {/* Profile Icon */}
          {props.profile && (
            <div className="grid place-items-center ml-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="text-xs">Profile</span>
            </div>
          )}
          {/* WishList */}
          <Link
            to="/wishlist"
            className="grid place-items-center ml-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="text-xs">Wishlist</span>
          </Link>
          {/* Cart */}
          <Link
            to="/checkout/cart"
            className="grid place-items-center ml-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="text-xs">Bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
