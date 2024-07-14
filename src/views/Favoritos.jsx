import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Container, Row, Col } from "react-bootstrap";
import CardTienda from "../components/CardTienda/CardTienda";

const Favoritos = () => {
  /* const { libros, setLibros } = useContext(FavoritosContext);
  console.log("todos los libros:", libros);

  const quitarFavorito = (id) => {
    // QUITO DE FAVORITOS CAMBIANDO "LIKED" A "FALSE"
    const nuevaLista = libros.map((libro) => {
      if (libro.id === id) {
        return {
          ...libro,
          liked: false,
        };
      }

      // RETORNO LOS OBJETOS QUE QUEDAN QUE SERÍAN LOS QUE TIENEN "LIKED" EN TRUE
      return libro;
    });
    setLibros(nuevaLista);
  }; */

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1>Guardados</h1>
      {/* Renderizar con .filter() y map() los datos traidos desde la API */}
      <Row className="mt-5">
        {/* {libros
          .filter((libro) => libro.liked == true)
          .map((libro, i) => (
            <Col key={libro.id} sm={6} md={4} lg={3} className="mb-4">
              <CardTienda
                id={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                precio={libro.precio}
                img={libro.img}
              />
            </Col>
          ))} */}
      </Row>
    </Container>
  );
};
export default Favoritos;
