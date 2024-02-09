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
    <div className="card w-36 h-64 md:w-56 md:h-80 flex justify-between  bg-base-100 shadow-xl">
      <figure className="md:px-10 px-3 pt-5 md:pt-10  h-56  items-center  flex">
        <img src={src} draggable={false} className="rounded-x h-full object-contain " />
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
    </div>
  );
};

export default Card;
