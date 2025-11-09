import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navigation/Navbar";

const Root = () => {
  /*
  #1B1B1B : gray black
  #FFCA09 : Yellow
  #FFDD00 : Yellow

  */
  return (
    <div className="bg-[#F9FAFB] h-fit">
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
