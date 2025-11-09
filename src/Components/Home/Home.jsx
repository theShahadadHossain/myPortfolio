import Service from "../Service/Service";
import Navbar from "../Shared/Navigation/Navbar";
import Banner from "./Banner/Banner";
import Highlight from "./Banner/Highlight";

const Home = () => {
  return (
    <div className="relative bg-[#ece3d9] h-screen">
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      {/* <Service></Service> */}
    </div>
  );
};

export default Home;
