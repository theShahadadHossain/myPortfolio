const Highlight = () => {
  return (
    <div className="flex justify-center gap-10 pt-16">
      <div className="rounded-2xl border-b-4 border-r-4 border-gray-300 cursor-pointer bg-white/70 backdrop-blur-2xl hover:bg-[#171717] hover:text-white duration-700 w-66 hover:border-white">
        <div className=" py-5 px-10 rounded-xl text-center">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            6+ Months
          </h2>
          <p className="text-lg">Proven Experience</p>
        </div>
      </div>
      <div className="rounded-2xl border-b-4 border-r-4 border-gray-300 cursor-pointer bg-white/70 backdrop-blur-2xl hover:bg-[#171717] hover:text-white duration-700 w-66 hover:border-white">
        <div className="py-5 px-10 rounded-xl text-center">
          <h2 className="2xl:text-xl xl:text-xl md:text-lg highlight-text mb-1">
            4+ Projects
          </h2>
          <p className="text-lg">Successfully Delivered</p>
        </div>
      </div>
      {/* <div className="bg-white/40 border-2 border-gray-400 backdrop-blur-2xl py-10 px-14 rounded-2xl text-center">
        <h2 className="2xl:text-2xl xl:text-xl md:text-lg highlight-text">
          6+ Months
        </h2>
        <p>Proven Experience</p>
      </div>
      <div className="bg-white/40 border-2 border-gray-400 backdrop-blur-2xl py-10 px-14 rounded-2xl text-center">
        <h2 className="2xl:text-2xl xl:text-xl md:text-lg highlight-text">
          6+ Months
        </h2>
        <p>Proven Experience</p>
      </div> */}
    </div>
  );
};

export default Highlight;
