import { useState } from "react";
import Navbar from "../components/DefNavbar";
import Sidebar from "../components/Sidebar";
import Wishlist from "../components/Wishlist";

export default function Home(props) {
  const [sideBar, setsideBar] = useState(false);
  const [wishList, setwishList] = useState(false);

  const updatesideBar = () => {
    setsideBar(!sideBar);
  };

  const updatewishlist = () => {
    setwishList(!wishList);
  };
  return (
    <div className="">
      <Sidebar state={sideBar} />
      <Navbar
        updateSB={() => updatesideBar()}
        updateWL={() => updatewishlist()}
      />
      <Wishlist state={wishList} updateWL={() => updatewishlist()} />
    </div>
  );
}
