import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/protected`, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(
      `${BASE_URL}/api/v1/login`,
      { email, password },
      { withCredentials: true }
    );
    setUser(response.data);
  };

  const logout = async () => {
    await axios.post(
      `${BASE_URL}/api/v1/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
