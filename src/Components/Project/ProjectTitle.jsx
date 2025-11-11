import { motion } from "framer-motion";

const ProjectTitle = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
      <div className="md:pt-36 pt-20">
        <h1 className="highlight-text lg:text-[3rem] md:text-5xl text-4xl font-bold text-center leading-13">
          My Best{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[#FF3737] font-black inline-block"
          >
            <span className="text-[#398AFE]">Projects</span>
          </motion.span>{" "}
          {""}
          are here
        </h1>
      </div>
      <p className="md:text-xl text-lg text-center lg:pt-6 md:py-10 pt-5">
        Your website should look good & performance optimized.
      </p>
    </div>
  );
};

export default ProjectTitle;
