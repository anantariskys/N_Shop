import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryDropDown = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/categories");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="text-xl lg:block hidden  font-semibold">
        Kategori
      </div>
      <ul tabIndex={0} className="lg:block hidden dropdown-content text-base z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`/product/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
     
      <details className="lg:hidden">
        <summary className="font-semibold">Category</summary>
        <ul >
          {data.map((item, index) => (
            <li  key={index}>
              <Link to={`/product/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CategoryDropDown;
