import { Link } from "react-router-dom";
import wish from "../../images/cart.webp";

export default function Main() {
  return (
    <div className="grid place-items-center mt-10">
      <img src={wish} alt="" className="w-48" />
      <div className="">
        <span className="font-bold text-lg">Hey, it feels so light!</span>
      </div>
      <div className="font-light text-sm">
        There is nothing in your bag. Let's add some items.
      </div>
      <Link to="/login" className="border border-[#FF3F6C] mt-6">
        <button className="p-3 font-bold text-[#FF3F6C] text-sm">
          ADD ITEMS FROM WISHLIST
        </button>
      </Link>
    </div>
  );
}
