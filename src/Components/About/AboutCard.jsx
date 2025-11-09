import { NavLink } from "react-router";
import profile from "../../assets/banner/currentProfile.jpg";

const AboutCard = () => {
  return (
    <div className="flex justify-start max-w-7xl mx-auto text-[#171717] w-6/12">
      <div className="border-3 border-neutral-400 border-dotted p-5 rounded-3xl w-[500px] flex justify-center">
        <div>
          <div className="flex gap-5">
            <div>
              <img
                src={profile}
                className="rounded-full w-44 p-1 border-4 border-[#FF3737]"
                alt=""
              />
            </div>
            <div className="pt-4">
              <h3 className="text-2xl font-extrabold">theShahadadHossain</h3>
              <h4 className="font-medium text-lg">Mohammad Shahadad</h4>

              {/* Ul */}
              <ul className="flex justify-between pt-4 gap-5">
                <li className="flex flex-col">
                  <span className="font-extrabold text-2xl">4+</span>{" "}
                  <span>Projects</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-extrabold text-2xl">6m+</span>
                  <span>Experience</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-extrabold text-2xl">100%</span>{" "}
                  <span>Satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-medium text-gray-500">Web developer</h3>
            <p className="text-xl font-medium leading-7">
              ✨ I Build high performance websites, that help grow your business
              🚀 | 🌐 React Developer |
            </p>
          </div>
          <div className="pt-10 flex justify-center gap-5 w-full">
            {" "}
            <NavLink
              to={`https://www.facebook.com/theShahadadHossain`}
              className={
                "w-full bg-[#171717]  px-5 py-3  rounded-xl cursor-pointer text-center"
              }
            >
              <button className="text-white">Follow</button>
            </NavLink>
            <NavLink
              to="https://wa.me/8801690103374"
              className={
                "w-full bg-[#171717]  px-5 py-3  rounded-xl cursor-pointer text-center"
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
