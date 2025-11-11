import React from "react";

const HighlightNumber = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center xl:gap-4 gap-2 lg:pt-7 md:pt-16 pt-12 w-full">
      <div className="rounded-2xl border-1 border-white border-dashed cursor-pointer backdrop-blur-2xl bg-[#171717] text-white duration-700 flex items-center xl:px-4">
        <div className="py-5 lg:px-3 px-10 rounded-xl text-center w-full">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            6+ Months
          </h2>
          <p className="text-lg">Proven Experience</p>
        </div>
      </div>
      <div className="rounded-2xl border-1 border-[#171717] border-dashed cursor-pointer bg-white/80 backdrop-blur-2xl hover:bg-[#171717] hover:text-white duration-700 flex items-center xl:px-4">
        <div className="py-5 lg:px-3 px-10 rounded-xl text-center w-full">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            4+ Projects
          </h2>
          <p className="text-lg">Successfully Delivered</p>
        </div>
      </div>
      <div className="rounded-2xl border-1 border-white border-dashed cursor-pointer backdrop-blur-2xl bg-[#171717] text-white duration-700 flex items-center xl:px-4">
        <div className="py-5 lg:px-4 px-10 rounded-xl text-center w-full">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            100% Client
          </h2>
          <p className="text-lg">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightNumber;
