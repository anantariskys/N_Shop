import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/elements/Alert.";
import Card from "../components/fragments/CardProduct";
import CardLayout from "../components/layouts/CardLayout";
const ProductCategory = () => {
  const [data, setData] = useState([]);
  const [buyStatus, setBuyStatus] = useState({
    status: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);

      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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
      {buyStatus.status && <Alert message={buyStatus.message} />}
      <div className="hero min-h-screen" style={backgroundImageStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{category}</h1>
          </div>
        </div>
      </div>
      <motion.h2
       initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
      className="lg:text-7xl text-5xl text-center text-neutral-content py-2">Product</motion.h2>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-neutral-content"></span>
        </div>
      ) : (
        <CardLayout>
          {data.map((item) => (
            <Card key={item.id} title={item.title} setBuyStatus={setBuyStatus} desc={item.description} id={item.id} src={item.image} price={item.price} />
          ))}
        </CardLayout>
      )}
    </div>
  );
};

export default ProductCategory;
