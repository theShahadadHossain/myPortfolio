import AboutCard from "./AboutCard";
import AboutDetails from "./AboutDetails";
import AboutSocial from "./AboutSocial";
import AboutTitle from "./AboutTitle";

const About = () => {
  return (
    <div className="2xl:py-36">
      <AboutTitle></AboutTitle>
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-2 pt-16">
        <AboutCard></AboutCard>
        <AboutDetails></AboutDetails>
      </div>
      <AboutSocial></AboutSocial>
    </div>
  );
};

export default About;
