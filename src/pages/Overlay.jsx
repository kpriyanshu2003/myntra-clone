import Men from "../components/Overlay/Men";
import Profile from "../components/Overlay/Profile";

export default function Overlay() {
  return (
    <div className="bg-white hidden">
      <div>
        <Men />
      </div>
      <div className="absolute right-10 z-10">
        <Profile />
      </div>
    </div>
  );
}
