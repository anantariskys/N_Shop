import React from "react";
import AboutImage1 from "../../../public/home/aboutimage1.jpg";
import AboutImage2 from "../../../public/home/aboutimage2.jpg";
import AboutImage3 from "../../../public/home/aboutimage3.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="hero  min-h-screen bg-base-200 overflow-hidden">
      <div className="hero-content w-full h-full flex-col lg:flex-row font-Poppins">
        <div className="lg:w-1/2 w-full h-[50vh] flex lg:h-full relative items-center justify-center gap-4 lg:py-5 ">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1,
            }}
            className=" absolute  -z-10 top-0 left-0 w-1/2 aspect-square rounded-full bg-neutral"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1.5,
            }}
            className=" absolute  -z-10 bottom-0 right-0 w-2/5 aspect-square rounded-full bg-neutral"
          ></motion.div>
          <motion.img
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          transition={{
            duration:0.5
          }}
          loading="lazy" src={AboutImage1} className="w-[25%] z-10 object-cover object-center  hover:scale-110 duration-300 ease-in-out h-3/5 bg-base-100 rounded-3xl"></motion.img>
          <motion.img
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          transition={{
            duration:1
          }}
          loading="lazy" src={AboutImage3} className="w-[25%] z-10 object-cover object-center hover:scale-110 duration-300 ease-in-out h-3/4 bg-base-100 rounded-3xl"></motion.img>
          <motion.img
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          transition={{
            duration:1.5
          }}
          loading="lazy" src={AboutImage2} className="w-[25%] z-10 object-cover object-center hover:scale-110 duration-300 ease-in-out h-3/5 bg-base-100 rounded-3xl"></motion.img>
        </div>
        <div className="lg:w-1/2 relative px-5 ">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            
            className="text-5xl lg:text-7xl font-bold"
          >
            About
          </motion.h1>
          <motion.div
          initial={{opacity:0,x:-100}} 
    
          transition={{
              duration:1
          }}
          whileInView={{
            opacity:1, x:0

          }}
          className="w-2/4 h-1 bg-neutral -z-10"></motion.div>
          <motion.p
          initial={{opacity:0,x:100}} 
          whileInView={{opacity:1, x:0}}
          transition={{
              duration:1.5
          }}
          className="py-6 text-xl">
            Destinasi belanja online terpercaya untuk semua kebutuhan Anda. Kami menawarkan berbagai produk berkualitas tinggi dengan harga yang kompetitif. Dibangun dengan komitmen untuk memberikan pengalaman berbelanja yang menyenangkan
            dan memuaskan bagi setiap pelanggan kami.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
