import PlayStore from "../../images/googleplay.png";
import AppStore from "../../images/appstore.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import Original from "../../images/original.png";
import Day14 from "../../images/14days.png";
import { useState } from "react";

export default function Footer() {
  const [more, setMore] = useState(true);
  const updatemore = () => {
    setMore(!more);
  };
  return (
    <div className="">
      <div className="lg:hidden mt-5">
        <div className="text-center">
          <button className="font-bold  text-white py-3 px-5 bg-[#282C3F] rounded-lg w-11/12">
            View More Products
          </button>
        </div>
        <div>
          <div
            className="flex items-center justify-between p-4"
            onClick={updatemore}
          >
            <span className="text-sm">More about shopping at Myntra</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="pull-right footer-arrow "
              style={{ transform: more ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0.05"></path>
                <path
                  fill="#282C3F"
                  d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
                ></path>
              </g>
            </svg>
          </div>
          {more && (
            <div className="px-3">
              <div>
                <span className="uppercase font-bold">Shop For</span>
                <div className="flex flex-wrap my-1">
                  <span className="">Explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Men</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Women</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Kids</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Home & Living</span>
                </div>
              </div>
              <div className="mt-5">
                <span className="uppercase font-bold">Keep in touch</span>
                <div className="flex gap-5 m-1">
                  <img src={Facebook} alt="" className="w-10" />
                  <img src={Twitter} alt="" className="w-10" />
                  <img src={Instagram} alt="" className="w-10" />
                  <img src={Youtube} alt="" className="w-10" />
                </div>
              </div>
              <div className="mt-5">
                <span className="uppercase font-bold">Customer Policies</span>
                <div className="flex flex-wrap m-1">
                  <span>Contact Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>FAQs</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>T&C</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Terms of Use</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Track Orders</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Shipping</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Shipping</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Cancellation</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Returns</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Privacy Policy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Grievance Officer</span>
                </div>
              </div>
              <div className="mt-10">
                <span className="uppercase font-bold">Useful Links</span>
                <div className="flex flex-wrap">
                  <span>Blog</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Careers</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Site Map</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Corporate Information</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3E4152"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  <span>Whitehat</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-100 mt-10 hidden lg:block">
        <div className="flex justify-evenly py-10">
          <div>
            <div className="text-gray-600 grid place-items-start">
              <span className="font-bold text-sm uppercase text-gray-900 mb-5 cursor-pointer">
                Online Shopping
              </span>
              <span className="cursor-pointer">Men</span>
              <span className="cursor-pointer">Women</span>
              <span className="cursor-pointer">Kids</span>
              <span className="cursor-pointer">Home & Living</span>
              <span className="cursor-pointer">Beauty</span>
              <span className="cursor-pointer">Gift Cards</span>
              <span className="cursor-pointer">Myntra Insider</span>
            </div>
            <div className="text-gray-600 grid place-items-start mt-5">
              <span className="font-bold text-sm uppercase text-gray-900 mb-5 cursor-pointer">
                Useful Links
              </span>
              <span className="cursor-pointer">Blog</span>
              <span className="cursor-pointer">Careers</span>
              <span className="cursor-pointer">Sitemap</span>
              <span className="cursor-pointer">Corporation Info</span>
              <span className="cursor-pointer">Whitehat</span>
            </div>
          </div>
          <div className="text-gray-600 grid place-items-start">
            <span className="font-bold text-sm uppercase text-gray-900 mb-5 cursor-pointer">
              Customer Policies
            </span>
            <span className="cursor-pointer">Contact Us</span>
            <span className="cursor-pointer">FAQ</span>
            <span className="cursor-pointer">T&C</span>
            <span className="cursor-pointer">Terms of Use</span>
            <span className="cursor-pointer">Track Order</span>
            <span className="cursor-pointer">Shipping</span>
            <span className="cursor-pointer">Cancellation</span>
            <span className="cursor-pointer">Returns</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Grievance Officer</span>
          </div>
          <div>
            <span className="font-bold text-sm uppercase text-gray-900 cursor-pointer">
              Experience Myntra App on Mobile
            </span>
            <div className="flex w-40 my-5">
              <img src={PlayStore} alt="" className=" mr-5 cursor-pointer" />
              <img src={AppStore} alt="" className="cursor-pointer" />
            </div>
            <span className="font-bold text-sm uppercase text-gray-900 cursor-pointer">
              Keep in Touch
            </span>
            <div className="w-8 flex my-4">
              <img src={Facebook} alt="" className="mr-3 cursor-pointer" />
              <img src={Twitter} alt="" className="mr-3 cursor-pointer" />
              <img src={Youtube} alt="" className="mr-3 cursor-pointer" />
              <img src={Instagram} alt="" className="mr-3 cursor-pointer" />
            </div>
          </div>
          <div className="cursor-default">
            <div className="flex items-center">
              <img src={Original} alt="" className="w-16" />
              <div className="w-52 ml-3">
                <span className="font-bold text-base uppercase text-gray-900">
                  100% original
                </span>
                <span className="text-gray-600">
                  guarantee for all products at myntra.com
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <img src={Day14} alt="" className="w-16" />
              <div className="w-48 ml-3">
                <span className="font-bold text-sm uppercase text-gray-900">
                  Return within 14 days
                </span>
                <span className="font-gray-600"> of receiving your order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
