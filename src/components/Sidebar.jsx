import login from "../images/sidebar-img.webp";
import getApp from "../images/get-myntra-app.webp";
import Wardrobe from "./sidebar/Wardrobe";
import Options from "./sidebar/Options";

export default function Sidebar(props) {
  return (
    <div
      className={`lg:hidden absolute h-full
      ${props.state ? "w-[75%]" : "w-0 hidden"}`}
    >
      <div>
        <img src={login} alt="" /> {/* Onclick goto login page */}
      </div>
      <div className="m-4">
        <Wardrobe />
        <div className="mt-4">
          <hr className="w-full" />
        </div>
        <ul>
          <Options />
        </ul>
      </div>
      <img src={getApp} alt="" /> {/* Onclick goto login page */}
    </div>
  );
}

// Right Arrow for Dropdown menu
/*}   <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#a9abb3"
        class="pull-right"
        style={{
          transform: arrow[index] ? "rotate(0deg)" : "rotate(-90deg)",
        }}
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z" opacity="0.05"></path>
          <path
            fill="#a9abb3"
            d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
          ></path>
        </g>
      </svg> */
