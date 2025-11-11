import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";

const Navbar = ({ isFooterInView }) => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Shahadad" },
    { path: "/project", label: "Project" },
  ];

  return (
    <motion.div
      className="flex justify-center items-center"
      animate={{ opacity: isFooterInView ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex justify-center items-center">
        <nav className="fixed 2xl:bottom-14 bottom-12 z-10 shadow-2xl">
          <ul className="relative flex items-center px-1 py-1 rounded-2xl text-lg font-medium bg-[#398AFE]">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink key={link.path} to={link.path} className="relative">
                  <li
                    className={`relative z-10 cursor-pointer uppercase md:px-10 px-8 md:py-4 py-3 rounded-xl ${
                      isActive ? "text-[#171717]" : "text-white/90"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-xl"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
