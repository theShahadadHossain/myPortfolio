import "./Banner.css";
import { useEffect } from "react";
import logo from "../../../assets/logo/bg-logo.png";

import { getCalApi } from "@calcom/embed-react";
import Contact from "./Contact";
import HighlightNumber from "../../Shared/Highlight/HighlightNumber";

const Banner = () => {
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
          <img className="scale-50 h-32 object-cover" src={logo} alt="" />
        </div>
        <div className="text-center">
          <h1 className="2xl:text-8xl lg:text-7xl md:text-6xl text-4xl text-center font-black 2xl:leading-20 lg:leading-16 md:leading-14 leading-9 tracking-tight text-[#121212]">
            I Build Websites That <br />{" "}
            <span className="text-[#FF3737] font-black">Never</span> Break
          </h1>
          <p className="md:pt-4 pt-4 2xl:text-2xl md:text-lg text-sm 2xl:leading-8 md:leading-6">
            Clean Code, Responsive, Functional &
            <br /> High-performing websites designed to grow your business.
          </p>
        </div>

        <div className="">
          <HighlightNumber></HighlightNumber>

          {/* Book meeting */}
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Banner;
