import { createContext, useEffect, useState } from "react";
import { ENDPOINT } from "../utils/constants";

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {
  const [libros, setLibros] = useState([]);
  const [generos, setGeneros] = useState([])

  const fetchLibros = async () => {
    try {
        const response = await fetch(`${ENDPOINT.libros}/get-all`);
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        setLibros(res.data);
    } catch (error) {
        console.error("Error al obtener libros:", error);
    }
  };

  const fetchGeneros = async () => {
    try {
      const response = await fetch(`${ENDPOINT.libros}/generos`);
      if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setGeneros(res.data);
    } catch (error) {
        console.error("Error al obtener generos:", error);
    }
  }

  useEffect(() => {
    fetchLibros()
    fetchGeneros()
  }, []);

  return (
    <LibrosContext.Provider value={{ libros, generos }}>
      {children}
    </LibrosContext.Provider>
  );
};