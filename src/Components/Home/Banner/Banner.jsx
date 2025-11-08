import { NavLink } from "react-router";
import myImg from "../../../assets/banner/bannerImg.png";
import myNewImg from "../../../assets/banner/profile.png";
import { PiFilesFill } from "react-icons/pi";
import { FaFacebook, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import "./Banner.css";
import { useEffect, useRef } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import gmail from "../../../assets/banner/gmail_logo.png";

const Banner = () => {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     if (imgRef.current) {
  //       imgRef.current.style.position = "absolute";
  //       imgRef.current.style.top = event.clientX + "px";
  //       imgRef.current.style.left = event.clientX + "px";
  //     }
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.addEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="max-w-7xl mx-auto select-none text-[#171717]">
      <div className="2xl:py-20">
        <div className="pb-12 text-center">
          <h1 className="text-8xl text-center font-extrabold leading-20 tracking-tight">
            I Build Websites That <br />{" "}
            <span className="text-[#FF3737] font-black">Never</span> Break
          </h1>
          <p className="py-5 text-2xl">
            High-performing websites designed to grow your business
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <h3 className="bg-[#171717] text-white px-6 py-4 rounded-lg flex items-center text-xl gap-4 cursor-pointer">
            Book your website
            <GoArrowRight className="text-3xl rotate-90" />
          </h3>
        </div>
        <div className="flex justify-center items-center gap-2 py-4">
          <button>
            <NavLink>
              <FaSquareWhatsapp className="w-14 h-14 text-[#25d366]" />
            </NavLink>
          </button>
          <button>
            <NavLink to={"https://www.linkedin.com/in/shahadad/"}>
              <FaLinkedin className="w-14 h-13 text-[#0077B5]" />
            </NavLink>
          </button>
          <button>
            <NavLink to={"https://www.linkedin.com/in/shahadad/"}>
              <FaFacebook className="w-14 h-13 text-[#1877F2]" />
            </NavLink>
          </button>
          <button>
            <NavLink>
              <img src={gmail} className="w-16.5 h-17" alt="" />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
