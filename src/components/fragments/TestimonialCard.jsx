import { motion } from "framer-motion";
import React from "react";
const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="md:w-[30rem] hover:-translate-y-2 shadow-md group hover:bg-neutral hover:text-neutral-content duration-300 ease-in-out w-44 bg-base-100 p-5 md:p-10 relative"
    >
      <div className="h-full w-1 group-hover:bg-base-100 duration-300 ease-in-out absolute left-0 bg-neutral top-0"></div>
      <img loading="lazy" draggable={false} src={item.image} className="md:w-1/5 w-2/5 aspect-square rounded-full object-cover absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16 shadow-md" alt="" />
      <h3 className="text-center text-xl font-bold">
        {item.author}, {item.location}
      </h3>
      <p className="text-center">"{item.review}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
