import { RxGlobe } from "react-icons/rx";
import projectOne from "../../assets/banner/projectImgOne.jpg";
import projectTwo from "../../assets/banner/projectTwo.jpg";
import projectThree from "../../assets/banner/projectThree.jpg";
import { PiFilesFill } from "react-icons/pi";
import { NavLink } from "react-router";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "./Project.css";

import { TbExternalLink } from "react-icons/tb";

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Lead Marketing",
      description: `Lead Marketing Inc. is a full-service marketing and
      communications agency serving worldwide from Canada. This is the
      global venture of Lead Bangladesh Ltd., a full-service marketing
      agency with 10 years of experience.`,
      image: projectOne,
      technologies: [
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Swiper JS",
      ],
      liveSite: "https://leadmarketingglobal.com/",
      projectDetails: "#",
      category: "Agency",
    },
    {
      id: 2,
      title: "Aschii",
      description: `Aschii is a full parcel delivery service in Bangladesh. We provide fast, secure, and reliable doorstep delivery for businesses and individuals. With real-time tracking and dedicated customer support, we make deliveries simple and stress-free.`,
      image: projectTwo,
      technologies: [
        "TanStack Query",
        "Javascript",
        "React Router",
        "Tailwind CSS",
      ],
      liveSite: "https://aschii.com/",
      projectDetails: "#",
      category: "Courier",
    },
    {
      id: 3,
      title: "Guider",
      description: `Guider connects travelers with knowledgeable local guides for personalized tours. Explore hidden gems and cultural experiences with experts who know the area best. Make every trip memorable with insider tips, stories, and seamless guidance.`,
      image: projectThree,
      technologies: [
        "Swiper JS",
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
      ],
      liveSite: "https://guider.shahadad.com/",
      projectDetails: "#",
      category: "Travel",
    },
    {
      id: 4,
      title: "Lead Bangladesh",
      description: `Lead Bangladesh is a full-service marketing and
      communications agency serving worldwide from Canada. This is the
      global venture of Lead Bangladesh Ltd., a full-service marketing
      agency with 10 years of experience.`,
      image: projectOne,
      technologies: [
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Swiper JS",
      ],
      liveSite: "https://leadmarketingglobal.com/",
      projectDetails: "#",
      category: "Agency",
    },
  ];

  return (
    <div className="select-none pb-20 pt-16 text-[#171717] px-2 rounded-2xl">
      <div className="xl:max-w-7xl mx-auto rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          enabled={true}
          onlyInViewport={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay
          className="rounded-2xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="relative">
              <div className="bg-neutral-200/60 rounded-2xl overflow-hidden transition xl:w-8/12 lg:w-9/12 md:w-10/12 w-full mx-auto shadow-xl pb-16">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full xl:h-[32rem] md:h-fit"
                  />
                </div>
                <div className="p-4">
                  <div>
                    <h3 className="md:text-3xl text-xl py-4 text-center text-neutral-800 highlight-text">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex md:justify-around justify-between py-2">
                    <div>
                      <p className="border-2 border-neutral-400 rounded-full px-5 md:text-xl cursor-pointer py-1 backdrop-blur-2xl text-neutral-700 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <div>
                      <NavLink to={project.liveSite}>
                        <p className="flex items-center gap-3 border-2 border-neutral-400 rounded-full px-5 md:text-xl cursor-pointer py-1 backdrop-blur-2xl text-neutral-700  font-medium">
                          Live View
                          <TbExternalLink className="text-2xl" />
                        </p>
                      </NavLink>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl text-gray-700 font-medium line-clamp-3 md:px-10 pb-8 pt-5">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="custom-prev">Previous</div>
              <div className="custom-next">Next</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectShowcase;
