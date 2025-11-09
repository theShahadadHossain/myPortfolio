import Meeting from "../Shared/Meeting/Meeting";
import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  return (
    <div className="2xl:pt-52">
      <div className="max-w-7xl mx-auto">
        <ServiceDetails></ServiceDetails>
        <ServiceCard></ServiceCard>
        <div className="pt-10">
          <h4 className="text-2xl text-center py-4 font-medium">
            Do you need services?
          </h4>
          <Meeting></Meeting>
        </div>
      </div>
    </div>
  );
};

export default Service;
