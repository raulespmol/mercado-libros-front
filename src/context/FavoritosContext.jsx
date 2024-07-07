import { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const FavoritosProvider = ({ children }) => {
  // ESTADO PARA LOS OBJETOS JSON 👇
  const [libros, setLibros] = useState([]);

  const fetchLibros = async () => {
    try {
        const response = await fetch("/libros.json");
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        setLibros(res);
    } catch (error) {
        console.error("Error fetching the libros:", error);
    }
};

  useEffect(() => {
    fetchLibros();
  }, []);

  return (
    <FavoritosContext.Provider value={{ libros, setLibros }}>
      {children}
    </FavoritosContext.Provider>
  );
};