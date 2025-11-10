import Meeting from "../Shared/Meeting/Meeting";
import SocialIcons from "../Shared/SocialIcons/SocialIcons";
import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";
import { IoSettings } from "react-icons/io5";

const Service = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <ServiceDetails></ServiceDetails>
        <ServiceCard></ServiceCard>
        <div className="pt-8">
          <div className="flex justify-center py-5">
            <h4 className="text-xl text-center py-2 font-medium border-1 rounded-full border-neutral-400 px-8 flex items-center gap-2">
              <IoSettings className="text-2xl" />
              Do you need any services?
            </h4>
          </div>
          <div className="flex justify-center items-center gap-6">
            <Meeting></Meeting>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-black inset-0"></div>
              <p className="text-xl">OR DM</p>
              <div className="w-8 h-[1px] bg-black inset-0"></div>
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
