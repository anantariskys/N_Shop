import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/elements/Alert.";
import Rating from "../components/elements/Rating";
import RelatedProducts from "../components/section/RelatedProducts";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

const ProdukDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const { state } = useAuth();
  const [buyStatus, setBuyStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const action = (id, price, message) => {
    setBuyStatus({
      status: true,
      message: message,
    });
    if (state.isAuthenticated) {
      addToCart(id, price);
    }
    setTimeout(() => {
      setBuyStatus({
        status: false,
        message: "",
      });
    }, 500);
  };

  return (
    <div className="bg-base-200">
      {buyStatus.status && <Alert  bg={'bg-neutral-content'} message={buyStatus.message} />}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          {isLoading ? (
            <div className="h-screen w-screen flex justify-center items-center flex-col">
              <span className="loading loading-dots loading-lg"></span>
              <p className="text-2xl font-bold">Loading...</p>
            </div>
          ) : (
            <>
              <img src={data.image} draggable={false} className="lg:w-1/4 w-2/5 rounded-lg shadow-2xl" />
              <div>
                <Rating rating={data.rating.rate} />
                <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
                <small>{data.category}</small>
                <h1 className="text-3xl font-bold">${data.price}</h1>
                <p className="py-6">{data.description}</p>
                {state.isAuthenticated ? (
                  <button
                    onClick={() => {
                      action(id, data.price, "Added to cart !!!");
                    }}
                    className="btn btn-sm md:text-sm text-xs  btn-neutral"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      action(id, data.price, "Login First !!!");
                    }}
                    className="btn btn-sm md:text-sm text-xs  btn-neutral"
                  >
                    Add to Cart
                  </button>
                )}{" "}
              </div>
            </>
          )}
        </div>
      </div>

      {data.category && <RelatedProducts setBuyStatus={setBuyStatus} category={data.category} id={data.id} />}
    </div>
  );
};

export default ProdukDetail;
