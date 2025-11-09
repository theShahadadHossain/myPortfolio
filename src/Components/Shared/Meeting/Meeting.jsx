import { GoArrowRight } from "react-icons/go";
import meet from "../../../assets/banner/googlemeet.png";

const Meeting = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        data-cal-namespace="30min"
        data-cal-link="shahadad/30min"
        data-cal-config='{"layout":"month_view"}'
        className="bg-[#171717] text-white md:px-5 px-6 md:py-4 py-3 rounded-xl flex items-center md:text-xl gap-2 cursor-pointer group transition-all duration-500 overflow-hidden border-b-4 border-r-4 border-gray-400 hover:border-white"
      >
        {/* Image Wrapper */}
        <div className="w-0 h-8 flex-shrink-0 overflow-hidden transition-all duration-500 ease-out group-hover:w-8 flex items-center justify-center">
          <img
            className="w-8 rounded-full opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"
            src={meet}
            alt="Meet"
          />
        </div>

        <p>Book 1 to 1 Meeting</p>
        <GoArrowRight className="text-2xl group-hover:scale-125  duration-500" />
      </button>
    </div>
  );
};

export default Meeting;
