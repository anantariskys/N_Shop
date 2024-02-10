import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import axios from "axios";
import Card from "../fragments/CardProduct";

const RelatedProducts = ({ category,id,setBuyStatus }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetchData();

  }, [category,id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      const filteredData = response.data.filter(item=>item.id!==id)
      setData(filteredData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };



  return (
    <>
    <h1 className="text-3xl font-bold ms-5 mb-2">Related Products</h1>
    {
      isLoading?(
        <div className="h-96 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-neutral"></span>
        </div>

      ):(

    <Splide 
      options={{
          perPage:5,
        rewind:true,
        breakpoints:{
          640:{
            perPage:2
          },
          768:{
            perPage:3
          },

        }
      }}
      className='py-5'
    >
      {data.map((item) => (
        <SplideSlide key={item.id} className="flex justify-center">
          <Card  title={item.title} desc={item.description} setBuyStatus={setBuyStatus} id={item.id} src={item.image} price={item.price} />
        </SplideSlide>
      ))}
    </Splide>
      )
    }
    </>
  );
};

export default RelatedProducts;
