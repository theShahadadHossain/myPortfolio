import ProjectTitle from "./ProjectTitle";
import ProjectShowcase from "./ProjectShowcase";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Service from "../Service/Service";

const Project = () => {
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
      <ProjectTitle></ProjectTitle>
      <ProjectShowcase></ProjectShowcase>
      <div className="2xl:py-20">
        <Service></Service>
      </div>
    </div>
  );
};

export default Project;
