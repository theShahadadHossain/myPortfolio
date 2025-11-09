import AboutCard from "./AboutCard";
import AboutDetails from "./AboutDetails";
import AboutTitle from "./AboutTitle";

const About = () => {
  return (
    <div className="2xl:pt-36 pb-40">
      <AboutTitle></AboutTitle>
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-2 pt-16">
        <AboutCard></AboutCard>
        <AboutDetails></AboutDetails>
      </div>
    </div>
  );
};

export default About;
