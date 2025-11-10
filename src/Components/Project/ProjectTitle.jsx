import { motion } from "framer-motion";

const ProjectTitle = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-36 flex flex-col justify-center items-center">
        <h1 className="highlight-text text-7xl font-bold">
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
        <p className="text-2xl text-center py-10">
          Your website should look good & performance optimized.
        </p>
      </div>
    </div>
  );
};

export default ProjectTitle;
