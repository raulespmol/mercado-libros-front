import { createContext, useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { ENDPOINT } from "../utils/constants";

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {

  const { token } = useContext(UserContext);
  const [ libros, setLibros ] = useState([]);
  const [ generos, setGeneros ] = useState([]);
  const [ librosUser, setlibrosUser ] = useState([]);

  const fetchLibrosUsuario = async () => {
    try {
      const response = await fetch(`${ENDPOINT.libros}/mis-libros`, {
        headers: {
          'Authorization': `Bearer ${token}` //token de usuario
      }
      });
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setlibrosUser(res.data);
    } catch (error) {
      console.error("Error al obtener libros del usuario:", error);
    }
  }

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

  const updateLibro = async (libroActualizado) => {
    // console.log("ID", libroActualizado.id)
    try {
      const response = await fetch(`${ENDPOINT.libros}/update/${libroActualizado.id}`, {
        method: "PUT",
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(libroActualizado),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      await fetchLibrosUsuario()
      await fetchLibros()
      return data
    } catch (error) {
        console.log("Error al actualizar libro", error)
    }
  }

  const deleteLibro = async (libroId) => {
    try {
      const response = await fetch(`${ENDPOINT.libros}/delete/${libroId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`, 
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      await fetchLibrosUsuario(); 
      return data;
    } catch (error) {
      console.error("Error al eliminar libro:", error);
    }
  };

  useEffect(() => {
    fetchLibros();
    fetchGeneros();
    fetchLibrosUsuario();
  }, []);

  return (
    <LibrosContext.Provider value={{ libros, generos, postLibro, librosUser, updateLibro, deleteLibro }}>
      {children}
    </LibrosContext.Provider>
  );
};