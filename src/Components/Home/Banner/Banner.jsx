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
        <div className="flex justify-center items-center gap-4 py-4">
          <NavLink
            to="https://wa.me/8801690103374"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 transition-transform"
          >
            <FaSquareWhatsapp className="w-12 h-12 text-[#25D366]" />
          </NavLink>

          <NavLink
            to="https://www.linkedin.com/in/shahadad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300  transition-transform"
          >
            <FaLinkedin className="w-12 h-12 text-[#0077B5]" />
          </NavLink>

          <NavLink
            to="https://www.facebook.com/theShahadadHossain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300  transition-transform"
          >
            <FaFacebook className="w-12 h-12 text-[#1877F2]" />
          </NavLink>

          <NavLink
            to="https://mail.google.com/mail/?view=cm&fs=1&to=regular.shahadad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300  transition-transform"
          >
            <img
              src={gmail}
              alt="Email Shahadad"
              className="w-15 h-15 rounded-2xl backdrop-blur-2xl"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
