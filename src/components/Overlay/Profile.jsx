import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="w-76 shadow-md bg-white border">
      <div className="border-b p-4">
        <div>
          <span className="font-bold text-base">Welcome</span>
          <br />
          <span className="text-sm">To access account and manage orders</span>
        </div>
        <div className="border-[#ff3f6c] border text-center w-36 mt-3">
          <button className="uppercase text-[#ff3f6c] font-bold  py-2">
            login / signup
          </button>
        </div>
      </div>
      <div className="p-4 border-b text-sm">
        <Link to="/login">
          <span className="cursor-pointer hover:font-bold">Orders</span>
        </Link>
        <br />
        <Link to="/wishlist">
          <span className="cursor-pointer hover:font-bold">Wishlist</span>
        </Link>
        <br />
        <span className="cursor-pointer hover:font-bold">Gift Cards</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Contact Us</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Myntra Insider</span>
      </div>
      <div className="p-4 text-sm">
        <span className="cursor-pointer hover:font-bold">Myntra Credit</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Coupons</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Saved Cards</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Saved VPA</span>
        <br />
        <span className="cursor-pointer hover:font-bold">Saved Addresses</span>
      </div>
    </div>
  );
}
