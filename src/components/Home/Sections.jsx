// Import for smartphone
import Men from "../../images/home-mobile/men.webp";
import Women from "../../images/home-mobile/women.webp";
import AccessoriesM from "../../images/home-mobile/accessories.webp";
import Beauty from "../../images/home-mobile/beauty.webp";
import Footwear from "../../images/home-mobile/footwear.webp";
import Kids from "../../images/home-mobile/kids.webp";
import JD from "../../images/home-mobile/just-dropped.webp";
import Gadget from "../../images/home-mobile/gadgets.webp";
import NewMyntra from "../../images/home-mobile/new-myntra.webp";
import SignUpExciting from "../../images/home-mobile/signup-exciting.webp";
import Discount from "../../images/home-mobile/discount.webp";
import ORS from "../../images/original-return-shipping.webp";
import Unmissable from "../../images/unmissasble.webp";
import Unmissable2 from "../../images/unmissasble-2.webp";

export default function Sections() {
  return (
    <div className="lg:hidden">
      <div className="overflow-y-hidden overflow-x-auto custom-scrollbar flex items-center">
        <img src={JD} alt="" className="w-20" />
        <img src={Men} alt="" className="w-20" />
        <img src={Women} alt="" className="w-20" />
        <img src={Kids} alt="" className="w-20" />
        <img src={Footwear} alt="" className="w-20" />
        <img src={AccessoriesM} alt="" className="w-20" />
        <img src={Beauty} alt="" className="w-20" />
        <img src={Gadget} alt="" className="w-20" />
      </div>
      <div className="my-2">
        <img src={NewMyntra} alt="" />
        <img src={SignUpExciting} alt="" />
        <img src={Discount} alt="" />
      </div>
      <div className="my-2">
        <img src={ORS} alt="" />
      </div>
      <div>
        <img src={Unmissable} alt="" />
        <img src={Unmissable2} alt="" />
      </div>
    </div>
  );
}
