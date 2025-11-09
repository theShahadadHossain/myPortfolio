import React from "react";

const HighlightNumber = () => {
  return (
    <div className="flex justify-center gap-2 pt-16">
      <div className="rounded-2xl border-1 border-white border-dashed cursor-pointer backdrop-blur-2xl bg-[#171717] text-white duration-700">
        <div className=" py-5 px-10 rounded-xl text-center">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            6+ Months
          </h2>
          <p className="text-lg">Proven Experience</p>
        </div>
      </div>
      <div className="rounded-2xl border-1 border-[#171717] border-dashed cursor-pointer bg-white/80 backdrop-blur-2xl hover:bg-[#171717] hover:text-white duration-700">
        <div className="py-5 px-10 rounded-xl text-center">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            4+ Projects
          </h2>
          <p className="text-lg">Successfully Delivered</p>
        </div>
      </div>
      <div className="rounded-2xl border-1 border-white border-dashed cursor-pointer backdrop-blur-2xl bg-[#171717] text-white duration-700">
        <div className="py-5 px-10 rounded-xl text-center">
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
