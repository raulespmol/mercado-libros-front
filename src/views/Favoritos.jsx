import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Favoritos = () => {
  const { libros, setLibros } = useContext(FavoritosContext);

  const quitarFavorito = (id) => {
    // QUITO DE FAVORITOS CAMBIANDO "ISFAVORITE A "FALSE" "
    const nuevaLista = libros.map((libro) => {
      if (libro.id === id) {
        return {
          ...libro,
          liked: false,
        };
      }

      // RETORNO LOS OBJETOS QUE QUEDAN QUE SERÍAN LOS QUE TIENEN "ISFAVORITE" EN TRUE 👇
      return libro;
    });
    setLibros(nuevaLista);
  };

  return (
    <div className="App">
      <h1>Guardados</h1>
      <div className="p-3 gallery grid-columns-4">
        {libros
          .filter((libro) => libro.liked)
          .map((libro, i) => (
            <img
              key={i}
              src={libro.src.tiny}
              alt={libro.alt}
              onClick={() => quitarFavorito(libro.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default Favoritos;