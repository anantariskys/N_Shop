import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';

const TableItem = ({ id, quantity, index}) => {
  const [product, setProduct] = useState(null);
 

  useEffect(() => {
    fetchData();
  }, []);

  


  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <tr className="hover">
      {product ? (
        <>
          <th>{index + 1}</th>
          <td>{product.title}</td>
          <td>${product.price}</td>
          <td>{quantity}</td>
          <td>${quantity * product.price}</td>
        </>
      ) : (
        <td colSpan="5">Loading...</td>
      )}
    </tr>
  );
};

export default TableItem;
