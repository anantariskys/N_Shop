import React, { useEffect } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import CategoryDropDown from "../elements/CategoryDropDown";

const Navbar = () => {
  const { state, logout } = useAuth();

  return (
    <nav className="navbar bg-base-100 md:px-10 sticky top-0 font-Poppins z-10">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/" className="btn btn-ghost text-xl ">
                N Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="font-semibold">
                Product
              </Link>
            </li>
            <li>
        
                
            <CategoryDropDown />
           
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex  items-center gap-3">
          <Link to="/" className="btn btn-ghost text-xl font-semibold">
            N Shop
          </Link>
          <Link to="/" className=" text-xl font-semibold">
            Home
          </Link>
          <Link to="/product" className=" text-xl font-semibold">
            Product
          </Link>
          <CategoryDropDown />
        </div>
      </div>
      <div className="navbar-end">
        {state.isAuthenticated ? (
          <>
            <Cart />
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="btn btn-ghost  ">
                <p>Welcome, {state.user.user}</p>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                <li>
                  <Link to={`/profile/${state.user.sub}`} className="justify-between">
                    {" "}
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn-sm btn btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn-sm btn-outline btn btn-neutral">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
