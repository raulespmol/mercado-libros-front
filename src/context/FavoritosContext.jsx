import { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;


const FavoritosProvider = ({ children }) => {
  // ESTADO PARA LOS OBJETOS JSON 👇
  const [libros, setLibros] = useState([]);

  const getLibros = async () => {
    const response = await fetch("libros.json");

    // CAMBIO DE NOMBRE, LIBROS A "LIBROSDB" 👇
    const res = await response.json();
    

    // AGREGADO DE OBJETOS, CON "MAP", AL ESTADO "LIBROS" Y UNA NUEVA PROP => "ISFAVORITE" 👇
    setLibros(res.map((libro) => ({ ...libro, isFavorite: false })));
  };

  useEffect(() => {
    getLibros();
  }, []);

  return (
    <FavoritosContext.Provider value={{ libros, setLibros }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;