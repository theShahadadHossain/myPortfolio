import { GoArrowRight } from "react-icons/go";
import meet from "../../../assets/banner/googlemeet.png";

const Meeting = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        data-cal-namespace="30min"
        data-cal-link="shahadad/30min"
        data-cal-config='{"layout":"month_view"}'
        className="bg-[#171717] text-white md:px-5 px-6 md:py-4 py-3 rounded-xl flex items-center md:text-xl gap-4 cursor-pointer duration-500 overflow-hidden border-b-4 border-r-4 border-gray-400 hover:border-white group"
      >
        <img
          className="w-8 rounded-full group-hover:scale-125 duration-500"
          src={meet}
          alt=""
        />

        <p>Book 1 - 1 Meeting</p>
        <GoArrowRight className="text-2xl group-hover:scale-125 duration-500" />
      </button>
    </div>
  );
};

export default Meeting;
