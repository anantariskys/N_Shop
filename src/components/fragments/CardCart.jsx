import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

const CardCart = ({ id, quantity }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {addToCart,reduceQuantity} = useCart();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setData(res.data);
      setTimeout(() => {
        setIsLoading(false);
      },1 );
    });
  };

 
  return (
    <div className="card card-side font-Poppins h-64  p-3 bg-base-100 shadow-xl">
      {isLoading ? (
       <div className="loading loading-spinner loading-md mx-auto"></div>
      ) : (
        <>
          <figure className="w-2/5">
            <img src={data.image} className="w-3/4 object-contain" alt="Movie" />
          </figure>
          <div className="card-body w-3/5">
            <h2 className="card-title text-sm lg:text-lg lg:line-clamp-3">{data.title}</h2>
            <small>{data.category}</small>
            <p>${data.price}</p>
            <div className="card-actions justify-end">
              <div className="join">
                <button className="btn btn-sm lg:btn-md  btn-neutral join-item" onClick={()=>{reduceQuantity(id,data.price)}}>-</button>
                <div className="btn btn-sm lg:btn-md btn-ghost join-item">{quantity}</div>
                <button className="btn btn-sm lg:btn-md btn-neutral join-item" onClick={()=>{addToCart(id,data.price)}}>+</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardCart;
