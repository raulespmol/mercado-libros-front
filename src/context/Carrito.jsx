import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (libro) => {
    setCarrito([
      ...carrito,
      libro
    ])
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(libro => libro.libro_id != id))
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}