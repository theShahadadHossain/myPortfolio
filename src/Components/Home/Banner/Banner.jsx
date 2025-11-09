import { NavLink } from "react-router";
import myImg from "../../../assets/banner/bannerImg.png";
import myNewImg from "../../../assets/banner/profile.png";
import { PiFilesFill } from "react-icons/pi";
import {
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaTelegram,
} from "react-icons/fa";
import "./Banner.css";
import { useEffect, useRef } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GoArrowRight, GoPlus } from "react-icons/go";
import gmail from "../../../assets/banner/gmail_logo.png";
import logo from "../../../assets/logo/bg-logo.png";
import meet from "../../../assets/banner/googlemeet.png";
import profile from "../../../assets/banner/currentProfile.jpg";

import { getCalApi } from "@calcom/embed-react";
import Contact from "./Contact";
import Highlight from "./Highlight";

const Banner = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

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
    <div className="max-w-7xl mx-auto select-none text-[#171717] flex justify-center items-center">
      <div className="">
        <div className="flex justify-center">
          <img className="scale-50 md:-mt-8 -mt-12" src={logo} alt="" />
        </div>
        <div className="text-center">
          <h1 className="2xl:text-8xl lg:text-7xl md:text-6xl text-4xl text-center font-black 2xl:leading-22 lg:leading-16 md:leading-14 leading-9 tracking-tight">
            I Build Websites That <br />{" "}
            <span className="text-[#FF3737] font-black">Never</span> Break
          </h1>
          <p className="md:pt-5 pt-4 2xl:text-2xl md:text-lg text-sm 2xl:leading-8 md:leading-6">
            Clean Code, Responsive, Functional &
            <br /> High-performing websites designed to grow your business.
          </p>
        </div>

        {/* Book meeting */}
        <div className="">
          <Highlight></Highlight>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Banner;
