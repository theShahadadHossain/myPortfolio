import Meeting from "../Shared/Meeting/Meeting";
import SocialIcons from "../Shared/SocialIcons/SocialIcons";
import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";
import { IoSettings } from "react-icons/io5";

const Service = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <ServiceDetails></ServiceDetails>
        <ServiceCard></ServiceCard>
        <div className="pt-8">
          <div className="flex justify-center py-5">
            <h4 className="md:text-xl text-center py-2 font-medium border-1 rounded-full border-neutral-400 px-8 flex items-center gap-2">
              <IoSettings className="text-2xl" />
              Do you need any services?
            </h4>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center md:gap-6 gap-4">
            <Meeting></Meeting>
            <div className="flex items-center gap-2">
              <div className="md:w-10 w-16 h-[1px] bg-black inset-0"></div>
              <p className="text-xl">OR - DM Me</p>
              <div className="md:w-10 w-16 h-[1px] bg-black inset-0"></div>
            </div>
            <div>
              <SocialIcons></SocialIcons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
