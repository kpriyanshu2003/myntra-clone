import React from "react";
// Import for desktop - Best of Myntra Exclusive Brands
import StylePick from "../../images/home-desktop/exclusivebrand/stylish-picks.webp";
import KurtaSets from "../../images/home-desktop/exclusivebrand/kurta-sets.webp";
import KurtasE from "../../images/home-desktop/exclusivebrand/kurtas.webp";
import Tops from "../../images/home-desktop/exclusivebrand/tops.webp";
import CasualShirt from "../../images/home-desktop/exclusivebrand/casual-shirts.webp";
import DressesE from "../../images/home-desktop/exclusivebrand/dresses.webp";
import TShirt from "../../images/home-desktop/exclusivebrand/tshirts.webp";
import STShirt from "../../images/home-desktop/exclusivebrand/stshirts.webp";
import StyleTshirt from "../../images/home-desktop/exclusivebrand/style-tshirts.webp";
import StyleShirt from "../../images/home-desktop/exclusivebrand/style-shirts.webp";
import TrackPant from "../../images/home-desktop/exclusivebrand/track-pants.webp";
import LoungeWear from "../../images/home-desktop/exclusivebrand/loungewear.webp";
import Jeans from "../../images/home-desktop/exclusivebrand/jeans.webp";
import ActiveWear from "../../images/home-desktop/exclusivebrand/activewear.webp";
import KurtasSets from "../../images/home-desktop/exclusivebrand/kurtas-sets.webp";
import TrendJean from "../../images/home-desktop/exclusivebrand/trendy-jeans.webp";

export default function ExclusiveBrand() {
  return (
    <div className="mt-16">
      <span className="uppercase font-bold text-2xl ml-10">
        Best of Myntra Exclusive Brand
      </span>
      <div className="flex items-center flex-wrap justify-center mt-5">
        <img src={StylePick} alt="" className="w-44 mr-2" />
        <img src={KurtaSets} alt="" className="w-44 mr-2" />
        <img src={KurtasE} alt="" className="w-44 mr-2" />
        <img src={Tops} alt="" className="w-44 mr-2" />
        <img src={CasualShirt} alt="" className="w-44 mr-2" />
        <img src={DressesE} alt="" className="w-44 mr-2" />
        <img src={TShirt} alt="" className="w-44 mr-2" />
        <img src={STShirt} alt="" className="w-44" />
        <img src={StyleTshirt} alt="" className="w-44 mr-2" />
        <img src={StyleShirt} alt="" className="w-44 mr-2" />
        <img src={TrackPant} alt="" className="w-44 mr-2" />
        <img src={LoungeWear} alt="" className="w-44 mr-2" />
        <img src={Jeans} alt="" className="w-44 mr-2" />
        <img src={ActiveWear} alt="" className="w-44 mr-2" />
        <img src={KurtasSets} alt="" className="w-44 mr-2" />
        <img src={TrendJean} alt="" className="w-44" />
      </div>
    </div>
  );
}
