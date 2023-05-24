// Import for desktop - Deals of the Day
import AccessoriesD from "../../images/home-desktop/dealday/accessories.webp";
import CasualShoes from "../../images/home-desktop/dealday/casualshoes.webp";
import Dinnerware from "../../images/home-desktop/dealday/dinnerware.webp";
import Flats from "../../images/home-desktop/dealday/flats.webp";
import Kurtas from "../../images/home-desktop/dealday/kurtas.webp";
import NaturalCare from "../../images/home-desktop/dealday/naturalcare.webp";
import Dresses from "../../images/home-desktop/dealday/dresses.webp";
import WorkReady from "../../images/home-desktop/dealday/workreadyshoes.webp";

export default function Dealofday() {
  return (
    <div className="">
      <span className="uppercase font-bold text-2xl ml-10">
        Deal of the day
      </span>
      <div className="flex items-center w-full mt-5 justify-center">
        <img src={Kurtas} alt="" className="w-44 mr-2" />
        <img src={Dresses} alt="" className="w-44 mr-2" />
        <img src={WorkReady} alt="" className="w-44 mr-2" />
        <img src={CasualShoes} alt="" className="w-44 mr-2" />
        <img src={Flats} alt="" className="w-44 mr-2" />
        <img src={Dinnerware} alt="" className="w-44 mr-2" />
        <img src={AccessoriesD} alt="" className="w-44 mr-2" />
        <img src={NaturalCare} alt="" className="w-44" />
      </div>
    </div>
  );
}
