import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "/public/home/heroSection.svg";
import { motion } from "framer-motion";
const HomeHeroSection = () => {
  return (
    <div className="hero  min-h-screen bg-base-200 overflow-hidden">
      <div className="hero-content w-full flex-col  lg:flex-row-reverse font-Poppins">
        <motion.img 
        initial={{opacity:0,x:400}} 
        whileInView={{opacity:1, x:0}}
        transition={{
            duration:1
        }}
        draggable={false} src={HeroImage} className="lg:max-w-md w-4/5 rounded-lg shadow-2xl" />
        <div className="lg:w-1/2 px-5">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            className="text-5xl lg:text-7xl font-bold"
          >
            N Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
            }}
            className="py-6 text-2xl lg:text-4xl"
          >
            "Your One-Stop Online Shopping Destination"
          </motion.p>
          <Link to={"/product"}>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{
                duration: 1.2,
              }}
              className="btn btn-neutral"
            >
              Go Shopping
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
