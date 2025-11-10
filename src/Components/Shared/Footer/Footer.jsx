import { NavLink } from "react-router";
import logo from "../../../assets/logo/bg-logo.png";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import gmail from "../../../assets/banner/gmail_logo.png";
import { motion } from "framer-motion";

const Footer = ({ footerRef }) => {
  const year = new Date().getFullYear();

  return (
    <div ref={footerRef} className="max-w-7xl mx-auto py-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2 object-cover">
          <img className="w-60" src={logo} alt="" />
          <p className="text-xl">
            I build Clean Coded, Responsive, Functional websites to grow your
            business. Powered by the latest frontend frameworks and best
            development practices. Helping you stand out online and connect with
            more customers.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="w-1/2">
            {/* Social */}
            <div className="flex justify-center">
              <h3 className="text-center text-xl font-semibold border-2 border-dotted w-1/3 rounded-2xl mb-5">
                DM Here
              </h3>
            </div>
            <div className="flex justify-center items-center md:gap-[10px] gap-2 py-0 my-0">
              {/* LinkedIn */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hover:scale-125 duration-500 transition-transform"
              >
                <NavLink
                  to="https://www.linkedin.com/in/shahadad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="xl:w-12 md:w-10 w-10 h-10 md:h-10 xl:h-12 text-[#0077B5]" />
                </NavLink>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hover:scale-125 duration-500 transition-transform"
              >
                <NavLink
                  to="https://wa.me/8801690103374"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareWhatsapp className="xl:w-12 md:w-10 w-10 h-10 md:h-10 xl:h-12 text-[#25D366]" />
                </NavLink>
              </motion.div>

              {/* Telegram */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hover:scale-125 duration-500 transition-transform"
              >
                <NavLink
                  to="https://t.me/theShahadadHossain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="xl:w-12 md:w-10 w-10 h-10 md:h-10 xl:h-12 text-[#24A1DE]" />
                </NavLink>
              </motion.div>

              {/* Gmail */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hover:scale-150 scale-125 duration-300 transition-transform xl:w-11 md:w-12 w-12 md:h-12 xl:h-11 h-12 object-cover"
              >
                <NavLink
                  to="https://mail.google.com/mail/?view=cm&fs=1&to=regular.shahadad@gmail.com"
                  target="_blank"
                >
                  <img
                    src={gmail}
                    alt="Email Shahadad"
                    className="object-cover"
                  />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <p className="text-xl text-center py-4">
        &copy; {year} Mohammad Shahadad Hossain, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
