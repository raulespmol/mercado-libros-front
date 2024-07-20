import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (libro) => {
    const libroYaAgregado = carrito.find(l => l.libro_id == libro.libro_id)

    if(libroYaAgregado){
      //Crear logica para:
      //Si el libro ya esta agregado, deshabilitar el boton
      //o alternar por boton "Quitar del carrito"
      //Seguramente deba ir en CardDetalle
      console.log("Libro ya agregado");
      return
    }

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