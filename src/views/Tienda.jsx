import { React, useState, useEffect } from "react";
// import { useContext } from "react";
// import { FavoritosContext } from "../providers/FavoritosContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardTienda from "../components/CardTienda/CardTienda";
import Filtros from "../components/Filtros/Filtros";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Tienda = () => {
  const navigate = useNavigate();
  // const { libros, setLibros } = useContext(FavoritosContext);

  const [libros, setLibros] = useState([]);

  const getLibros = async () => {
    const response = await fetch(`${BASE_URL}/libros/get-all`);
    const res = await response.json();
    // AGREGADO DE OBJETOS, CON "MAP", AL ESTADO "LIBROS" Y UNA NUEVA PROP => "ISFAVORITE" 👇
    setLibros(res.data);
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
      <div className="p-5 w-100">
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
        <Container fluid className="px-0">
          <Row>
            {libros.map(libro => (
              <Col key={libro.libro_id} sm={6} md={4} lg={3} className="mb-4">
                <CardTienda
                  id={libro.libro_id}
                  titulo={libro.titulo}
                  autor={libro.autor}
                  precio={libro.precio}
                  img={libro.url_imagen}
                  usuario={libro.usuario}
                  genero={libro.genero}
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
