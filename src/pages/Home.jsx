import { useState } from "react";
import Navbar from "../components/DefNavbar";
import Sidebar from "../components/Sidebar";
import Wishlist from "../components/Wishlist";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

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
        profile={true}
      />
      <Wishlist state={wishList} updateWL={() => updatewishlist()} />
      <Main />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
