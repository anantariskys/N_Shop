import axios from "axios";
import React, { useEffect, useState } from "react";
import TableItem from "../fragments/TableItem";
import Transaction from "../fragments/Transaction";

const TransactionSection = ({ id }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/carts/user/${id}`);
      setTransactions(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };


  return (
    <>
      <h2 className="text-center text-xl font-bold">My Transactions</h2>
      {isLoading && <p className="text-lg font-bold text-center">Loading <span className="loading loading-spinner loading-md"></span></p>}
      {!isLoading && transactions.map((transaction) => (
        <Transaction  key={transaction.id} transaction={transaction}/>
      ))}
    </>
  );
};

export default TransactionSection;
