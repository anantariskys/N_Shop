import React, { useEffect, useState } from "react";

import HeroImage from "/public/home/heroSection.svg";

import AboutSection from "../components/section/AboutSection";
import ServiceSection from "../components/section/ServiceSection";
import TestimonialSection from "../components/section/TestimonialSection";

const Home = () => {
  return (
    <div className={`bg-neutral `}>
      <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col  lg:flex-row-reverse font-Poppins">
          <img draggable={false} src={HeroImage} className="lg:max-w-md w-4/5 rounded-lg shadow-2xl" />
          <div className="lg:w-1/2 px-5">
            <h1 className="text-5xl lg:text-7xl font-bold">N Shop</h1>
            <p className="py-6 text-2xl lg:text-4xl">"Your One-Stop Online Shopping Destination"</p>
            <button className="btn btn-neutral">Go Shopping</button>
          </div>
        </div>
      </div>
      <AboutSection />
     <ServiceSection/>
     <TestimonialSection/>
    </div>
  );
};

export default Home;
