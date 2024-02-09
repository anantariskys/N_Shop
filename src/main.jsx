// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home.jsx";
import ProdukDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Register from "./page/Register";
import { CartProvider } from "./hooks/useCart";
import CartDetail from "./page/CartDetail";
import Navbar from "./components/fragments/Navbar";
import ProfilDetail from "./page/ProfilDetail";
import  { AuthProvider, useAuth } from "./hooks/useAuth";
import ProductCategory from "./page/ProductCategory";
import Footer from "./components/fragments/Footer";
import Product from "./page/Product";

const NavbarAndContentLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer/>
</>
);

export const PrivateRoute = ({ children}) => {
  const { state} = useAuth();
  if (localStorage.getItem('token')) {
    return children
  }
  
  return <Navigate to={'/login'} />
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavbarAndContentLayout>
                <Home />
              </NavbarAndContentLayout>
            }
          />
          <Route
            path="/produk/:id"
            element={
              
              <NavbarAndContentLayout>
                <ProdukDetail />
              </NavbarAndContentLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cartDetail"
            element={
              <PrivateRoute>
              <NavbarAndContentLayout>
                <CartDetail />
              </NavbarAndContentLayout>
              </PrivateRoute>
            }
            />
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
              <NavbarAndContentLayout>
                <ProfilDetail />
              </NavbarAndContentLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/product/:category"
            element={
              <NavbarAndContentLayout>
                <ProductCategory />
              </NavbarAndContentLayout>
          
            }
          />
          <Route
            path="/product"
            element={
              <NavbarAndContentLayout>
                <Product/>
              </NavbarAndContentLayout>
          
            }
          />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
