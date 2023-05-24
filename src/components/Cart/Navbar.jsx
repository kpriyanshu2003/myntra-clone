import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Secure from "../../images/sprite-secure.png";

export default function Navbar() {
  return (
    <div className="shadown-sm">
      <div className="flex items-center px-2 py-4 lg:hidden w-full">
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
        {/* Page title */}
        <div className="w-full mx-3">
          <span className="text-lg font-bold">SHOPPING BAG</span>
        </div>
        {/* Stage */}
        <div className="cursor-pointer">
          <span className="whitespace-nowrap text-sm text-gray-500">
            Step 1/3
          </span>
        </div>
      </div>
      <div className="mt-5 hidden lg:flex justify-between mb-40 w-full h-16 border-b items-start">
        <Link to="/">
          <img src={Logo} alt="" className="w-12 ml-16" />
        </Link>
        <div className="uppercase text-[#535766] text-sm font-bold mt-2">
          <span className="text-[#20BD99] border-b-2 border-[#20BD99]">
            bag
          </span>
          <span className="font-thin">&nbsp;--------------&nbsp;</span>
          <span className="">address</span>{" "}
          <span className="font-thin">&nbsp;--------------&nbsp;</span>
          <span className="">payment</span>
        </div>
        <div className="flex items-center mr-16 mt-1">
          <img src={Secure} alt="" className="w-6 mr-1" />
          <span className="uppercase text-[#535766] font-bold text-sm">
            100% secure
          </span>
        </div>
      </div>
    </div>
  );
}
