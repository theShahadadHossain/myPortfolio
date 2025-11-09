import Service from "../Service/Service";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="relative bg-[#f1e9df] h-screen">
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <Service></Service>
    </div>
  );
};

export default Home;
