import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import Meeting from "../Shared/Meeting/Meeting";
import { NavLink } from "react-router";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import meet from "../../assets/banner/googlemeet.png";
import instagram from "../../assets/logo/instagramLogo.png";
import { GoArrowRight } from "react-icons/go";

const AboutSocial = () => {
  return (
    <div className="pt-28 flex items-center h-[22rem] max-w-7xl mx-auto gap-5">
      <div className="w-8/12 gap-5 grid grid-cols-3 h-fit">
        {/* Linkedin */}
        <NavLink to="https://www.linkedin.com/in/shahadad/" target="_blank">
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-start items-center gap-3">
              <FaLinkedin className="text-5xl text-[#0077B5]" />
              <div>
                <h3 className="text-start text-lg font-bold">shahadad</h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  200+ Followers
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Follow
            </button>
          </div>
        </NavLink>

        {/* Facebook */}
        <NavLink
          to="https://www.facebook.com/theShahadadHossain"
          target="_blank"
        >
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaFacebook className="text-5xl text-[#1877F2]" />
              <div>
                <h3 className="text-start text-lg font-semibold">
                  theShahadadHossain
                </h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  100+ Followers
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Follow
            </button>
          </div>
        </NavLink>

        {/* Instagram */}
        <NavLink
          to={`https://www.instagram.com/theshahadadhossain/`}
          target="_blank"
        >
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-center items-center gap-3">
              <div className="xl:w-10 md:w-13 w-12 md:h-13 xl:h-10 h-12 object-cover">
                <img
                  src={instagram}
                  alt="Email Shahadad"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-start text-lg font-semibold">
                  theshahadadhossain
                </h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  5+ Followers
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Follow
            </button>
          </div>
        </NavLink>

        {/* Github */}
        <NavLink to={`https://github.com/theShahadadHossain`} target="_blank">
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-start items-center gap-3">
              <FaGithub className="text-5xl" />
              <div>
                <h3 className="text-start text-lg font-semibold">
                  theShahadadHosain
                </h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  30+ Repo
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Follow
            </button>
          </div>
        </NavLink>

        {/* Whatsapp */}
        <NavLink to="https://wa.me/8801690103374" target="_blank">
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-start items-center gap-3">
              <FaWhatsappSquare className="text-5xl text-[#25D366]" />
              <div>
                <h3 className="text-start text-lg font-semibold">
                  01690-103374
                </h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  DM here
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Message
            </button>
          </div>
        </NavLink>

        {/* Telegram */}
        <NavLink to="https://t.me/theShahadadHossain" target="_blank">
          <div className="bg-neutral-200/70 p-5 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex justify-center items-center gap-3">
              <FaTelegram className="text-5xl text-[#24A1DE]" />
              <div>
                <h3 className="text-start text-lg font-semibold">
                  theShahadadHosain
                </h3>
                <h4 className="text-start text-sm font-medium text-gray-600">
                  200+ Followers
                </h4>
              </div>
            </div>

            <button
              className={`bg-[#171717] text-white px-8 py-2 rounded-xl w-full text-center cursor-pointer`}
            >
              Message
            </button>
          </div>
        </NavLink>
      </div>

      {/* Meeting */}
      <div className="w-4/12 h-[20rem]">
        <div className="flex flex-col justify-center items-center h-full">
          <button
            data-cal-namespace="30min"
            data-cal-link="shahadad/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-[#121212] text-white w-full h-full rounded-xl flex flex-col justify-center items-center md:text-xl gap-4 cursor-pointer duration-500 overflow-hidden border-2 border-dashed border-white hover:border-white group"
          >
            <img className="w-20 rounded-full object-cover" src={meet} alt="" />
            {/* <BsStopwatchFill className="text-4xl" /> */}
            <h4 className="text-xl highlight-text leading-10">
              Book <br /> One to One Meeting
            </h4>
            <p className="text-gray-400">Cal.com</p>
            <GoArrowRight className="text-2xl group-hover:scale-125 duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSocial;
