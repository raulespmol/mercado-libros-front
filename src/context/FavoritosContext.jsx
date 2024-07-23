import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { LibrosContext } from "./LibrosContext";
import { ENDPOINT } from "../utils/constants";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({children}) => {
  const { libros } = useContext(LibrosContext)
  const { token } = useContext(UserContext)
  const [favoritos, setFavoritos] = useState([])

  const fetchFavoritos = async (token) => {
    try {
        const response = await fetch(`${ENDPOINT.favoritos}/get`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const {data} = await response.json();
        
        const librosFavoritos = libros.filter(libro =>
          data.some(fav => fav.libro_id === libro.libro_id)
        );

        setFavoritos(librosFavoritos)

    } catch (error) {
        console.error("Error al obtener favoritos:", error);
    }
  };

  const toggleFavorito = async (usuario, libro, method) => {
    //method recibe "add" o "remove" 
    try {
      const response = await fetch(`${ENDPOINT.favoritos}/${method}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario_id: usuario,
          libro_id: libro
        })
      })

      if(response){
        fetchFavoritos(token)
      }
    } catch (error) {
        console.log("Error al agregar favorito", error)
    }
  }

  useEffect(() => {
    fetchFavoritos(token)
  }, [libros])
  

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}