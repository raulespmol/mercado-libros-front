import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [usuario, setUsuario] = useState(null)
  
  const getDataUsuario = async (token) => {
    const response = await fetch(`${BASE_URL}/usuarios/get`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })

    const [data] = await response.json()
    setUsuario(data)
    console.log(usuario);
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      getDataUsuario(token)
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setToken(data.token || null);

    return data;
  };

  const registerWithEmailAndPassword = async (nombre, email, password) => {
    const response = await fetch(`${BASE_URL}/usuarios/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await response.json();
    return data;
  };

  const logout = () => {
    setToken(null);
  };
  
  return (
    <UserContext.Provider
      value={{
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        usuario,
        token,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
