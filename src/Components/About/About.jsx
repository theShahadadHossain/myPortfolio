import AboutCard from "./AboutCard";
import AboutDetails from "./AboutDetails";
import AboutSocial from "./AboutSocial";
import AboutTitle from "./AboutTitle";

const About = () => {
  return (
    <div className="2xl:py-36 pt-24">
      <AboutTitle></AboutTitle>
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col xl:justify-between  justify-center items-center gap-2 pt-16 px-4">
        <AboutCard></AboutCard>
        <AboutDetails></AboutDetails>
      </div>
      <AboutSocial></AboutSocial>
    </div>
  );
};

export default About;
