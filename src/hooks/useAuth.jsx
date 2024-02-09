import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useCart } from './useCart';

const AuthContext = createContext();

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
  };

  const {reset} = useCart();

  
  const [state, dispatch] = useReducer(authReducer, initialState);


  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
      const decodedToken = jwtDecode(token);
      dispatch({ type: LOGIN, payload: { user: decodedToken } });
    }
    
    };

    checkAuthStatus();

    
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN, payload: { user: jwtDecode(res.data.token) } });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/users', formData);
      console.log('Registration success:', res);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
   reset()
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);