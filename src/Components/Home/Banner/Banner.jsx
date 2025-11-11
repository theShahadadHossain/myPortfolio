import "./Banner.css";
import logo from "../../../assets/logo/bg-logo.png";

import Contact from "./Contact";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto select-none text-[#171717] flex justify-center items-center">
      <div className="">
        <div className="flex justify-center">
          <img
            className="scale-90 md:h-32 h-20 object-cover"
            src={logo}
            alt=""
          />
        </div>
        <div className="text-center 2xl:pt-14 md:pt-5 pt-10 title-container">
          <h1 className="2xl:text-7xl xl:text-[4rem] lg:text-[3rem] md:text-[2.6rem] text-center font-black 2xl:leading-[7rem] xl:leading-[6.5rem] lg:leading-[5rem] md:leading-[4.4rem] leading-[2.5rem] tracking-tight text-[#121212] highlight-text home-title">
            I Build Functional,{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-[#FF3737] font-black inline-block"
            >
              Responsive
            </motion.span>{" "}
            <br className="md:block hidden" />
            Website That{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-[#398AFE] font-black inline-block"
            >
              Never
            </motion.span>{" "}
            Break
          </h1>
          <p className="md:pt-4 pt-4 2xl:text-2xl md:text-lg 2xl:leading-8 md:leading-6">
            Clean Code, Responsive, Functional &
            <br /> High-performing websites designed to grow your business.
          </p>
        </div>

        <div className="">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Banner;
