const ServiceCard = () => {
  return (
    <div className="2xl:pt-16 pt-10 flex md:flex-row flex-col justify-center gap-5 text-[#171717] px-2">
      {/* Card One */}
      <div className="bg-neutral-200/60 border-3 border-dashed border-neutral-300/60 backdrop-blur-2xl max-w-[600px] md:px-[40px] px-3 md:py-[60px] py-10 text-center rounded-2xl flex flex-col items-center w-full group hover:bg-[#171717] hover:border-neutral-300 cursor-pointer">
        <h5 className="tracking-tight border-1 border-neutral-400 group-hover:border-neutral-700 duration-400 px-8 py-[6px] rounded-4xl text-sm 2xl:text-base text-neutral-700 group-hover:text-white">
          Custom
        </h5>
        <h3 className="font-extrabold tracking-wide text-3xl 2xl:text-4xl my-4 text-neutral-800 group-hover:text-white duration-200 highlight-text">
          Development
        </h3>
        <p className="2xl:text-xl text-center py-2 leading-7 group-hover:text-white">
          I deliver custom web development solutions, where every project is
          unique and built to modern standards, Optimized for speed, responsive
          across all devices, and focused on user satisfaction
        </p>
      </div>

      {/* Card Two */}
      <div className="bg-neutral-200/60 border-3 border-dashed border-neutral-300/60 backdrop-blur-2xl max-w-[600px] md:px-[40px] px-3 md:py-[60px] py-10 text-center rounded-2xl flex flex-col items-center w-full group hover:bg-[#171717] hover:border-neutral-300  cursor-pointer">
        <h5 className="tracking-tight border-1 border-neutral-400 group-hover:border-neutral-700 duration-400 px-8 py-[6px] rounded-4xl text-sm 2xl:text-base text-neutral-700 group-hover:text-white">
          Solve
        </h5>
        <h3 className="font-extrabold tracking-wide text-3xl 2xl:text-4xl my-4 text-neutral-800 group-hover:text-white duration-200 highlight-text">
          Bug & Issues
        </h3>
        <p className="2xl:text-xl text-center py-2 leading-7 group-hover:text-white">
          From minor glitches to critical errors, I track down errors, resolve
          issues, and optimize your code for flawless performance, keeping your
          projects fast, stable, and error-free.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
