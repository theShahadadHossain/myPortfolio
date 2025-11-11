import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router";
import gmail from "../../../assets/banner/gmail_logo.png";
import Meeting from "../../Shared/Meeting/Meeting";
import { motion } from "framer-motion";
import SocialIcons from "../../Shared/SocialIcons/SocialIcons";

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
            <div className="md:w-28 w-16 h-[1px] bg-black"></div>{" "}
            <h3 className="text-center text-lg font-medium">OR - DM Me</h3>{" "}
            <div className="md:w-28 w-16 h-[1px] bg-black"></div>{" "}
          </div>
        </motion.span>

        {/* Social */}
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default Contact;
