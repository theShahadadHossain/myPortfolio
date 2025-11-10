import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navigation/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Root = () => {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { threshold: 0.8 });

  return (
    <div className="bg-[#F5F2EE] h-fit">
      <div className="">
        <Navbar isFooterInView={isFooterInView}></Navbar>
        <Outlet></Outlet>
        <Footer footerRef={footerRef}></Footer>
      </div>
    </div>
  );
};

export default Root;
