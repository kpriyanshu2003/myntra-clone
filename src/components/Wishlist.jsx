import { Link } from "react-router-dom";
import wishlist from "../images/wishlist.avif";

export default function Wishlist(props) {
  return (
    <div
      className={`lg:hidden fixed h-full w-full bg-[rgb(0,0,0,0.5)]  ${
        props.state ? "" : "hidden"
      }`}
    >
      <div className="w-full absolute bg-white bottom-0">
        <div
          className="right-5 absolute top-2"
          onClick={() => props.updateWL()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z" opacity="0.05"></path>
              <path
                fill="#282C3F"
                d="M12.967 12L19.3 5.666a.685.685 0 000-.967.686.686 0 00-.967 0L12 11.033 5.666 4.7a.686.686 0 00-.967 0 .685.685 0 000 .967L11.033 12 4.7 18.334a.685.685 0 000 .967.686.686 0 00.967 0L12 12.967l6.334 6.334a.686.686 0 00.967 0 .685.685 0 000-.967L12.967 12z"
              ></path>
            </g>
          </svg>
        </div>

        <img src={wishlist} alt="" className="mt-2" />
        <div className="m-10">
          <div>
            <span className="font-bold text-lg">Login</span>{" "}
            <span className="font-base text-base">or</span>{" "}
            <span className="font-bold text-lg">Sign Up</span>
          </div>
          <div className="mt-5 text-sm">
            <div className="border-2 border-gray-200 flex items-center relative">
              <span className="border-r border-gray-400 px-2 text-gray-500">
                +91
              </span>
              <input
                type="tel"
                name=""
                id=""
                placeholder="Mobile Number"
                className="w-full py-2 indent-2 outline-none"
              />
            </div>
            <div className="text-sm mt-5 text-gray-500">
              <span>By continuing, I agree to</span>{" "}
              <span className="text-[#FF3F6C] font-bold">Terms of Use</span>{" "}
              <span>&</span>{" "}
              <span className="text-[#FF3F6C] font-bold">Privacy Policy</span>
            </div>
            <div className="border text-center mt-4 text-white bg-[#FF3F6C]">
              <button className="font-medium uppercase py-2">continue</button>
            </div>
          </div>
          <div className="text-sm mt-7">
            <span className="text-gray-500 text-light">
              Having trouble logging in ?
            </span>{" "}
            <Link to="/recovery">
              <span className="font-bold text-[#FF3F6C]">Get Help</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
