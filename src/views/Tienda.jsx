import { React, useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardTienda from "../components/CardTienda/CardTienda";
import Filtros from "../components/Filtros/Filtros";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { LibrosContext } from "../context/LibrosContext";

const Tienda = () => {
  const navigate = useNavigate();
  const { libros } = useContext(LibrosContext);
  const { search } = useContext(SearchContext);

  // const [filter, setFilter] = useState(libros)

  const filteredLibros = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(search.toLowerCase()) ||
    libro.autor.toLowerCase().includes(search.toLowerCase()) 
  );

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
            {filteredLibros.map(libro => (
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
              ))
            }
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Tienda;
