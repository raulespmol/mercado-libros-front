import { React, useState, useEffect } from "react";
// import { useContext } from "react";
// import { FavoritosContext } from "../providers/FavoritosContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardTienda from "../components/CardTienda/CardTienda";
import Filtros from "../components/Filtros/Filtros";
import { useNavigate } from "react-router-dom";

const Tienda = () => {
  const navigate = useNavigate();
  // const { libros, setLibros } = useContext(FavoritosContext);

  const [libros, setLibros] = useState([]);

  const getLibros = async () => {
    const response = await fetch("libros.json");
    const res = await response.json();
    // AGREGADO DE OBJETOS, CON "MAP", AL ESTADO "LIBROS" Y UNA NUEVA PROP => "ISFAVORITE" 👇
    setLibros(res);
  };

  useEffect(() => {
    getLibros();
  }, []);

  // const addFavorite = (id) => {
  //   const nuevaLista = libros.map((libro) =>{

  //     if (libro.id == id) {
  //       return {
  //         ...libro,
  //         liked: !libro.liked,
  //       };
  //     }
  //     return libro;
  //   });
  //   setLibros(nuevaLista);
  // };

  return (
    <Container fluid className="p-0 d-flex">
      <Filtros />
      <div className="p-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 className="text-center">Tienda</h3>
          <Button
            variant="dark"
            className=""
            onClick={() => navigate(`/libros/nuevo`)}
          >
            Crear Publicacion
          </Button>
        </div>
        <Container>
          
          {/* Renderizar con .map() los datos traidos desde la API */}

          <Row>
            {libros.map((libro, i) => (
              <Col key={libro.id} sm={6} md={4} lg={3} className="mb-4">
                <CardTienda
                  id={libro.id}
                  titulo={libro.titulo}
                  autor={libro.autor}
                  precio={libro.precio}
                  img={libro.img}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Tienda;
