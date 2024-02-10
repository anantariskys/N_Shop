import { motion } from "framer-motion";
import React from "react";

import avatar1 from "../../../public/home/avatar1.jpg";
import avatar2 from "../../../public/home/avatar2.jpg";
import avatar3 from "../../../public/home/avatar3.jpg";
import avatar4 from "../../../public/home/avatar4.jpg";
import TestimonialCard from "../fragments/TestimonialCard";
const testimonialData = [
  {
    review: "Saya sangat senang dengan produk yang saya beli di N Shop. Kualitasnya luar biasa dan pengiriman sangat cepat!",
    author: "Sarah",
    location: "New York",
    image: avatar1,
  },
  {
    review: "Pengalaman berbelanja yang menyenangkan! Layanan pelanggan mereka sangat responsif dan membantu.",
    author: "John",
    location: "Los Angeles",
    image: avatar2,
  },
  {
    review: "Produk di N Shop benar-benar memenuhi ekspektasi saya. Harganya terjangkau dan kualitasnya sangat baik!",
    author: "Emily",
    location: "Chicago",
    image: avatar3,
  },
  {
    review: "Pilihan produk yang lengkap dan layanan pengiriman yang cepat membuat saya kembali lagi untuk berbelanja di N Shop.",
    author: "Michael",
    location: "Houston",
    image: avatar4,
  },
];

const TestimonialSection = () => {
  return (
    <div className=" w-full font-Poppins  min-h-screen py-10 bg-base-200">
      <motion.h2
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:0.5
      }}
      className="text-5xl lg:text-7xl text-center font-bold mb-5 ">Testimonial</motion.h2>
      <div className="   w-full justify-center flex flex-wrap gap-x-5 gap-y-20 py-10 relative">
        {testimonialData.map((item) => (
         <TestimonialCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
