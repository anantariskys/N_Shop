import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { useCart } from "../../hooks/useCart";
const Card = ({ title,  price, src, id, setBuyStatus }) => {
  const{state}=useAuth()

  const { addToCart } = useCart();



  const action = (id, price,message) => {
    setBuyStatus({
      status:true,
      message: message
    });
    setTimeout(() => {
      setBuyStatus({
        status:false,
        message: ''
      });
    }, 500);
    if (state.isAuthenticated) {
      addToCart(id, price);
    }
  };

  return (
    <motion.div
    initial={{
      opacity:0
  }}
  animate={{
      opacity:1
  }}
  transition={{
      duration:0.5
  }}
    className="card w-36 h-64 md:w-56 md:h-80 hover:-translate-y-2 duration-300 group ease-in-out flex font-Poppins justify-between  bg-base-100 shadow-xl">
      <figure className="md:px-10 px-3 pt-5 md:pt-10  h-56  items-center  flex">
        <img src={src} draggable={false} className="rounded-x group-hover:scale-110 duration-300 ease-in-out h-full object-contain " />
      </figure>
      <div className="card-body   items-center  text-center">
        <h2 className="card-title text-sm md:text-lg line-clamp-2">{title}</h2>
        <div className="card-actions flex">
          {
            state.isAuthenticated?(
            <button
              onClick={() => {
                action(id, price,'Added to cart !!!');
              }}
              className="btn btn-xs md:btn-sm md:text-sm text-xs  btn-neutral"
            >
              $ {price}
            </button>

            ):(
            <button
              onClick={() => {
                action(id, price,'Login First !!!');
              }}
              className="btn btn-xs md:btn-sm md:text-sm text-xs  btn-neutral"
            >
              $ {price}
            </button>

            )
          }
        
          <Link to={`/produk/${id}`}>
            <button className="btn btn-xs md:btn-sm md:text-sm text-xs btn-neutral">Detail</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
