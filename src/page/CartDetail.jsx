import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/elements/Alert.";
import CardCart from "../components/fragments/CardCart";
import TableItem from "../components/fragments/TableItem";
import {useAuth} from '../hooks/useAuth';
import { useCart } from "../hooks/useCart";

const CartDetail = () => {
  const { cart,total, setCart,setTotal } = useCart();
  const{state}=useAuth()
 
  const [isSuccess, setIsSuccess] = useState(false);

  const purchaseCart = async () => {
    try {
     const response = await axios.post("https://fakestoreapi.com/carts", {
        userId: state.user.sub,
        date: new Date(),
        products: cart.map((item) => ({ productId: item.id, quantity: item.quantity })),
      });
      setIsSuccess(true);
      setCart([]); 
      setTotal(0);
      localStorage.removeItem('cart')
      localStorage.removeItem('total')
      console.log(response)

      setTimeout(() => {
        setIsSuccess(false);
      }, 2500); 
    } catch (error) {
      console.error("Error purchasing:", error);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 bg-base-300 py-5 lg:pt-10 font-Poppins">
      {isSuccess && (
                <Alert color={'success'}  message={'Your purchase has been confirmed!'} />
              )}
      <h1 className="text-3xl font-bold lg:mb-3">Your Cart</h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full lg:w-2/4 gap-4 flex flex-col">
          {cart.length > 0 ? (
            cart.map((item, index) => <CardCart key={index} id={item.id} quantity={item.quantity} />)
          ) : (
            <p className="text-2xl  mt-5 text-center">Cart is empty!!! <Link className=" text-warning font-bold" to={'/'}> Go shopping? </Link></p>
          )}
        </div>

        <div className="h-screen w-full lg:w-2/5 flex py-5 justify-center lg:items-center sticky  lg:top-0">
          <div className="flex flex-col justify-between w-full divide-y-2 h-[75vh]  divide-solid divide-base-content bg-base-200 rounded-t-xl">
            <div className="h-full overflow-auto">
              <div className="overflow-auto">
                <table className="table md:table-md table-xs bg-base-100">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <TableItem key={index} index={index} id={item.id} quantity={item.quantity} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full h-[20%] p-4">
              <div className="flex justify-between">
                <p>Total :</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-end">
                <button onClick={purchaseCart} className="btn btn-sm md:btn-md btn-neutral">Purchase</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
