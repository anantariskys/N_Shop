import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/fragments/CardProduct";
import CardLayout from "../components/layouts/CardLayout";

const ProductCategory = () => {
  const [data, setData] = useState([]);
  const [buyStatus, setBuyStatus] = useState({
    status: false,
    message: "",
  });
  const { category } = useParams();

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(https://source.unsplash.com/random/1200×780/?products)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="bg-neutral  ">
      {buyStatus.status && (
        <div role="alert" className="alert fixed top-22 z-10 w-1/4 left-1/2 -translate-x-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{buyStatus.message}</span>
        </div>
      )}
      <div className="hero min-h-screen" style={backgroundImageStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{category}</h1>
          </div>
        </div>
      </div>
      <CardLayout>
        {data.map((item) => (
          <Card key={item.id} title={item.title} setBuyStatus={setBuyStatus} desc={item.description} id={item.id} src={item.image} price={item.price} />
        ))}
      </CardLayout>
    </div>
  );
};

export default ProductCategory;
