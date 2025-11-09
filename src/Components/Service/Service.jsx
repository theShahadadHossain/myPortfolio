import ServiceCard from "./ServiceCard";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  return (
    <div className="2xl:pt-44">
      <div className="max-w-7xl mx-auto">
        <ServiceDetails></ServiceDetails>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Service;
