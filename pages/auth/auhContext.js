import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/adusers', {email, password});
    setToken(response.data.token);
    localStorage.setItem('token', response.data.token);
  };

  const register = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/adusers', {name, email, password});
      console.log(response.data);
    } catch (error) {
      console.log(error);
  }
    // await axios.post('http://localhost:5000/api/adusers', { name, email, password });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
