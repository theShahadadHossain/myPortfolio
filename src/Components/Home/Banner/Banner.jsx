import "./Banner.css";
import { useEffect } from "react";
import logo from "../../../assets/logo/bg-logo.png";

import { getCalApi } from "@calcom/embed-react";
import Contact from "./Contact";
import { motion } from "framer-motion";

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
        <div className="text-center pt-14">
          <h1 className="2xl:text-7xl lg:text-7xl md:text-6xl text-4xl text-center font-black 2xl:leading-[7rem] lg:leading-[5rem] md:leading-[4rem] leading-[2.5rem] tracking-tight text-[#121212] highlight-text">
            I Build Functional,{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#FF3737] font-black inline-block"
            >
              Responsive
            </motion.span>{" "}
            <br />
            Website That{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[#398AFE] font-black inline-block"
            >
              Never
            </motion.span>{" "}
            Break
          </h1>
          <p className="md:pt-4 pt-4 2xl:text-2xl md:text-lg text-sm 2xl:leading-8 md:leading-6">
            Clean Code, Responsive, Functional &
            <br /> High-performing websites designed to grow your business.
          </p>
        </div>

        <div className="">
          {/* <HighlightNumber></HighlightNumber> */}

          {/* Book meeting */}
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Banner;
