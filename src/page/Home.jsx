import React from "react";


import AboutSection from "../components/section/AboutSection";
import HomeHeroSection from "../components/section/HomeHeroSection";
import ServiceSection from "../components/section/ServiceSection";
import TestimonialSection from "../components/section/TestimonialSection";


const Home = () => {
  return (
    <div className={`bg-neutral `}>
      <HomeHeroSection/>
      <AboutSection />
     <ServiceSection/>
     <TestimonialSection/>
    </div>
  );
};

export default Home;
