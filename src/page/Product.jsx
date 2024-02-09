import React, { useEffect, useState } from "react";
import Card from "../components/fragments/CardProduct";
import Navbar from "../components/fragments/Navbar";
import CardLayout from "../components/layouts/CardLayout";
import axios from "axios";


const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buyStatus, setBuyStatus] = useState({
    status : false,
    message : ''
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

      <h1 className="font-Poppins lg:text-7xl text-5xl text-base-100 text-center mb-5 font-bold ">Produk</h1>
        {buyStatus.status && (
               <div role="alert" className="alert fixed top-22 z-10 w-1/4 left-1/2 -translate-x-1/2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               <span>{buyStatus.message}</span>
             </div>
              )}
   
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-neutral"></span>
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
