import React, { useEffect, useState } from "react";
import Card from "../components/fragments/CardProduct";
import Navbar from "../components/fragments/Navbar";
import CardLayout from "../components/layouts/CardLayout";
import axios from "axios";
import Alert from "../components/elements/Alert.";
import { motion } from "framer-motion";
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buyStatus, setBuyStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={`bg-neutral  py-10`}>
      <motion.h1
      initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
      className="font-Poppins lg:text-7xl text-5xl text-base-100 text-center mb-5 font-bold ">Produk</motion.h1>
      {buyStatus.status && <Alert message={buyStatus.message} />}

      {loading ? (
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

export default Product;
