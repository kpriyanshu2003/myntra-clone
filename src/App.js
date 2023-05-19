import React, { useState } from "react";
import Home from "./pages/Home";
// import Sidebar from "./components/Sidebar";
import Overlay from "./pages/Overlay";

export default function App() {
  const [sideBar, setsideBar] = useState(true);
  const updatesideBar = () => {
    setsideBar(!sideBar);
  };
  // useEffect(() => {
  //   const handleSideBar = () => {
  //     if (sideBar) updatesideBar();
  //   };
  //   document.addEventListener("mousedown", handleSideBar);
  // });

  return (
    <div>
      <Overlay state={sideBar} />
      <Home updateSB={updatesideBar} id="dg" />;
    </div>
  );
}

// <Sidebar state={sideBar} />
