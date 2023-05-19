import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <div className="">
      <Navbar sideBar={() => props.updateSB()} />
    </div>
  );
}
