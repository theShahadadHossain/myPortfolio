import { NavLink } from "react-router";
import profile from "../../assets/banner/currentProfile.jpg";

const AboutCard = () => {
  return (
    <div className="flex justify-start max-w-7xl mx-auto text-[#171717] xl:w-5/12 lg:w-6/12 w-full">
      <div className="md:border-2 border-2 border-neutral-400 border-dotted lg:p-3 lg:py-5 md:p-5 px-2 py-4 rounded-3xl lg:w-[500px] md:w-3/4 mx-auto flex justify-center items-start">
        <div>
          <div className="flex md:gap-5 gap-2 items-center">
            <div>
              <img
                src={profile}
                className="rounded-full md:w-44 p-1 md:border-4 border-3 border-[#398AFE]"
                alt=""
              />
            </div>
            <div className="md:pt-4">
              <h3 className="md:text-2xl text-lg font-extrabold">
                theShahadadHossain
              </h3>
              <h4 className="font-medium md:text-lg text-sm">
                Mohammad Shahadad <span className="text-gray-400 ml-1">he</span>
              </h4>
              {/* Ul */}
              <ul className="flex justify-between md:pt-4 pt-2 gap-5">
                <li className="flex flex-col">
                  <span className="font-extrabold md:text-2xl text-lg">4+</span>{" "}
                  <span className="md:text-lg text-xs">Projects</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-extrabold md:text-2xl text-lg">
                    6m+
                  </span>
                  <span className="md:text-lg text-xs">Experience</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-extrabold md:text-2xl text-lg">
                    100%
                  </span>{" "}
                  <span className="md:text-lg text-xs">Satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:pt-4 pt-2">
            <h3 className="md:text-lg md:font-medium text-gray-500">
              Web developer
            </h3>
            <p className="md:text-xl text-lg font-medium md:leading-7 leading-6">
              ✨ I Build high performance websites, that help grow your business
              🚀 | 🌐 React Developer |
            </p>
          </div>
          <div className="md:pt-10 pt-4 flex justify-center gap-5 w-full">
            {" "}
            <NavLink
              to={`https://www.instagram.com/theshahadadhossain/`}
              className={
                "w-full bg-[#171717] px-5 py-3  rounded-xl cursor-pointer text-center"
              }
            >
              <button className="text-white">Follow</button>
            </NavLink>
            <NavLink
              to="https://ig.me/m/theshahadadhossain"
              className={
                "w-full bg-[#171717] px-5 py-3  rounded-xl cursor-pointer text-center"
              }
            >
              <button className="text-white">Message</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
