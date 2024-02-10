import { useScroll, useSpring, useTransform ,motion} from "framer-motion";
import React, { useRef } from "react";


import AboutSection from "../components/section/AboutSection";
import HomeHeroSection from "../components/section/HomeHeroSection";
import ServiceSection from "../components/section/ServiceSection";
import TestimonialSection from "../components/section/TestimonialSection";




const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const scroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={targetRef}  className={`bg-neutral `}>
      <motion.div className="bg-neutral h-1 z-10 fixed bottom-0 left-0 " style={{ width: scroll}}></motion.div>
      <HomeHeroSection/>
      <AboutSection />
     <ServiceSection/>
     <TestimonialSection/>
    </div>
  );
};

export default Home;
