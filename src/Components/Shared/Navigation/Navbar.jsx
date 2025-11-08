import { NavLink } from "react-router";
import logo from "../../../assets/logo/mainLogo.png";
import { FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="backdrop-blur-lg">
      <nav className="text-[#171717] max-w-7xl mx-auto">
        <div className="flex items-center justify-evenly w-full -mt-12">
          <div className="lg:w-2/12">
            <img src={logo} alt="" />
          </div>
          <div className="lg:w-10/12 text-left">
            <ul className="flex items-center justify-end gap-16 text-xl font-medium">
              <NavLink to={"/"}>
                <li className="text-[#171717] cursor-pointer">Home</li>
              </NavLink>
              <NavLink to={"/project"}>
                <li className="text-[#171717] cursor-pointer">Project</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li className="text-[#171717] cursor-pointer">About</li>
              </NavLink>
              <NavLink to={"contact"}>
                <button className="bg-[#171717] text-white px-12 py-4 rounded-xl hover:text-white transition-all duration-700 cursor-pointer hover:px-14 inline-block hover:underline">
                  <span className="flex items-center gap-2">
                    Message
                    <FaPaperPlane className="text-2xl animate-pulse" />
                  </span>
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* <hr className="w-10/12 mx-auto -mt-12" /> */}
      </nav>
    </div>
  );
};

export default Navbar;
