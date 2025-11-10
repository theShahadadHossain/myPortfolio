import { useEffect, useRef } from "react";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";
import Lenis from "@studio-freight/lenis";
import About from "../About/About";

const Home = () => {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative bg-[#F5F2EE] scroll-smooth">
      <Banner></Banner>
      <div className="2xl:pt-52">
        <Service></Service>
      </div>
      <About></About>
    </div>
  );
};

export default Home;
