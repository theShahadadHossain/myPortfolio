import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import meet from "../../assets/banner/googlemeet.png";
import instagram from "../../assets/logo/instagramLogo.png";
import profile from "../../assets/banner/currentProfile.jpg";

const AboutSocial = () => {
  return (
    <div className="lg:pt-20 pt-24 flex lg:flex-row flex-col-reverse justify-center items-center xl:max-w-7xl mx-auto lg:gap-2 md:gap-5 px-2">
      <div className="lg:w-8/12 w-full md:gap-5 gap-2 grid lg:grid-cols-3 grid-cols-2 h-fit px-2">
        {/* Linkedin */}
        <NavLink to="https://www.linkedin.com/in/shahadad/" target="_blank">
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-1 md:gap-3 gap-2">
              <FaLinkedin className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl text-[#0077B5]" />
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
                  shahadad
                </h3>
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
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-2 md:gap-3 gap-2">
              <FaFacebook className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl text-[#1877F2]" />
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
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
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-2 md:gap-3 gap-2">
              <div className="xl:w-11 lg:w-8 md:w-13 w-[30px] xl:h-12 lg:h-8 md:h-13 h-[30px] object-cover">
                <img
                  src={instagram}
                  alt="Email Shahadad"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
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
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-2 md:gap-3 gap-2">
              <FaGithub className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl" />
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
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
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-2 md:gap-3 gap-2">
              <FaWhatsappSquare className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl text-[#25D366]" />
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
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
          <div className="bg-neutral-200/70 lg:p-2 md:p-5 p-3 rounded-2xl border-1 border-dotted flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-start md:items-center lg:gap-2 md:gap-3 gap-2">
              <FaTelegram className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl text-[#24A1DE]" />
              <div>
                <h3 className="text-start lg:text-sm md:text-lg font-medium md:font-semibold">
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
      <div className="lg:w-4/12 w-full px-2">
        <div className="flex flex-col justify-center items-center md:h-full">
          <button
            data-cal-namespace="30min"
            data-cal-link="shahadad/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-[#121212] text-white w-full h-full rounded-xl flex flex-col justify-center items-center md:text-xl xl:gap-8 md:gap-6 gap-4 cursor-pointer duration-500 overflow-hidden border-2 border-dashed border-white hover:border-white lg:py-4 md:py-10 py-5"
          >
            <div className="flex items-center gap-3 mb-0">
              <img
                src={profile}
                className="rounded-full w-16 p-[2px] md:border-3 border-2 border-[#398AFE]"
                alt=""
              />
              <p className="text-3xl">+</p>
              <div className="border-3 border-[#398AFE] p-[4px] rounded-full w-16">
                <p className="bg-white p-3 rounded-full text-black flex justify-center text-xl font-medium">
                  You
                </p>
              </div>
            </div>

            {/* <BsStopwatchFill className="text-4xl" /> */}
            <h4 className="lg:text-lg md:text-xl highlight-text md:leading-3 leading-2.5 mb-2 mt-0">
              <p className="flex items-center justify-center gap-4">
                Book{" "}
                <img
                  className="w-8 rounded-full object-cover"
                  src={meet}
                  alt=""
                />{" "}
              </p>
              <br /> One to One Meeting
            </h4>

            <p className="text-[#121212] bg-white/90 px-5 py-1 font-medium rounded-full">
              Book here
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSocial;
