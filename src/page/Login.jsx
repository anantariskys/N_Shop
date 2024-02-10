import { useState } from 'react';
import { Link, Navigate, } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state,login } = useAuth();





 
    

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password); 
  };

  



  

  const backgroundImageStyle={
     backgroundImage: 'url(https://source.unsplash.com/random/1200×780/?onlineshop)',backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' 
    
  }

  return (
    <>
      {state.isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="min-h-screen bg-base-200 flex items-center justify-center md:px-0 px-4" style={backgroundImageStyle}>
          <div className="card shadow-2xl bg-base-100 w-full max-w-md">
            <form method="post" className="card-body" onSubmit={handleLogin}>
              <h3 className='text-center font-bold text-xl'>Login</h3>
              <div className="form-control">
                <label htmlFor="username" className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
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
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-neutral">Login</button>
              </div>
              <small>Dont have account? <Link className='text-primary' to={'/register'}>Register.</Link></small>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
