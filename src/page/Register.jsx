import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useAuth} from '../hooks/useAuth';

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const { state} = useAuth();

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      username,
      password,
      firstname,
      lastname,
      phone
    };

 
    axios.post("https://fakestoreapi.com/users", formData)
      .then((res) => {
        console.log("Registration success:", res);
        navigate('/login');
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

 

  const backgroundImageStyle={
    backgroundImage: 'url(https://source.unsplash.com/random/1200×900/?onlineshop)',backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' 
   
 }

  return (
    <>
      {state.isAuthenticated ? (
        <Navigate to={'/'}/>
      ) : (
        <div className="min-h-screen bg-base-200 flex items-center justify-center " style={backgroundImageStyle}>
          <div className="card shadow-2xl bg-base-100 w-full max-w-md">
            <form method="post" className="card-body" onSubmit={handleRegister}>
              <h3 className="text-center font-bold text-xl mb-4">Register</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
            
                <div className="form-control">
                  <label htmlFor="username" className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
           
                <div className="form-control">
                  <label htmlFor="password" className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
           
                <div className="form-control">
                  <label htmlFor="firstname" className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="input input-bordered"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
           
                <div className="form-control">
                  <label htmlFor="lastname" className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="input input-bordered"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
   
                <div className="form-control">
                  <label htmlFor="phone" className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="input input-bordered"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-neutral w-full">Register</button>
              <small>Already have account? <Link className='text-primary' to={'/login'}>Login.</Link></small>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
