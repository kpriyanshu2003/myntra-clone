import { Link } from "react-router-dom";
import img from "../../images/login-img.webp";

export default function Main() {
  return (
    <div className="grid place-items-center lg:pt-10  bg-[#FEEEF0] ">
      <div className=" lg:w-[28%] bg-white lg:pb-32 ">
        <div className="relative">
          <Link to="/" className="lg:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute top-2 left-2"
            >
              <path
                fill="#3E4152"
                fillRule="evenodd"
                d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"
              ></path>
            </svg>
          </Link>
          <img src={img} alt="" />
        </div>
        <div className="px-10 w-full mt-10">
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
