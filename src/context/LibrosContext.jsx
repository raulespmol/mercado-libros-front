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

  const postLibro = async (nuevoLibro) => {
    try {
      const response = await fetch(`${ENDPOINT.libros}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoLibro),
      });
  
      const data = await response.json();
      await fetchLibros()
      return data
    } catch (error) {
        console.log("Error al postear libro", error)
    }
  }

  useEffect(() => {
    fetchLibros()
    fetchGeneros()
  }, []);

  return (
    <LibrosContext.Provider value={{ libros, generos, postLibro }}>
      {children}
    </LibrosContext.Provider>
  );
};