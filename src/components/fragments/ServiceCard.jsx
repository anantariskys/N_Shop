import { motion } from "framer-motion";
import React from "react";
const ServiceCard = ({ item }) => {
  return (
    <motion.div
    initial={{
        scale:0
    }}
    whileInView={{
        scale:1
    }}
    transition={{
        duration:1
    }}
    className="card rounded-none w-72 bg-base-100 shadow-xl relative">
      <div className="h-1 w-3/4 bg-neutral absolute top-0 left-1/2 -translate-x-1/2"></div>
      <figure className="px-10 h-2/5 pt-10">
        <img loading="lazy" draggable={false} src={item.image} alt="Shoes" className="rounded-xl h-3/4 aspect-auto" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
