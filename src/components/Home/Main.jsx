import { useLocation } from "react-router-dom";
import Dealofday from "./DealsofDay";
import ExclusiveBrand from "./ExclusiveBrand";
import Sections from "./Sections";
import Carousel from "./Carousel";

export default function Main() {
  const location = useLocation();
  return (
    location.pathname === "/" && (
      <div>
        <Sections />
        <Carousel />
        <div className="hidden lg:block">
          <Dealofday />
          <ExclusiveBrand />
        </div>
      </div>
    )
  );
}
