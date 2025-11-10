import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router";
import gmail from "../../../assets/banner/gmail_logo.png";
import Meeting from "../../Shared/Meeting/Meeting";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Meeting></Meeting>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center gap-4">
            {" "}
            <div className="w-28 h-[1px] bg-black"></div>{" "}
            <h3 className="text-center text-lg font-medium">OR - DM Me</h3>{" "}
            <div className="w-28 h-[1px] bg-black"></div>{" "}
          </div>
        </motion.span>

        {/* Social */}
        <div className="flex justify-center items-center md:gap-[10px] gap-2 py-0 my-0">
          {/* LinkedIn */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <NavLink
              to="https://www.linkedin.com/in/shahadad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300 transition-transform"
            >
              <FaLinkedin className="xl:w-12 md:w-10 w-10 h-10 md:h-10 xl:h-12 text-[#0077B5]" />
            </NavLink>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <NavLink
              to="https://wa.me/8801690103374"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300 transition-transform"
            >
              <FaSquareWhatsapp className="xl:w-12 md:w-10 w-10 h-10 md:h-10 xl:h-12 text-[#25D366]" />
            </NavLink>
          </motion.div>

          {/* Telegram */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <NavLink
              to="https://t.me/theShahadadHossain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 duration-300 transition-transform"
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
              <img src={gmail} alt="Email Shahadad" className="object-cover" />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
