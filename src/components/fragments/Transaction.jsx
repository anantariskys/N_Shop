// Transaction.js
import React, { useState } from 'react';

import TableItem from './TableItem';

const Transaction = ({ transaction }) => {


  


 


  return (
    <div className="mb-8">
      <p className="mt-5">Date: {new Date(transaction.date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
      <div className="overflow-auto">
        <table className="table md:table-md table-xs bg-base-100">
          <thead>
            <tr>
              <th>*</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {transaction.products.map((product, index) => (
              <TableItem key={index} id={product.productId} quantity={product.quantity} index={index}  product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
