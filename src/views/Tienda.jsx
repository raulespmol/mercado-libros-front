import { React, useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LibrosContext } from "../context/LibrosContext";
import CardTienda from "../components/CardTienda/CardTienda";
import Filtros from "../components/Filtros/Filtros";
import './Tienda.css'

const filtrosInitialState = {
  busqueda: '',
  generos: [],
  orden: '',
  precioMin: '',
  precioMax: ''
}

const Tienda = () => {
  const navigate = useNavigate();
  const { libros } = useContext(LibrosContext);

  const [filtros, setFiltros] = useState(filtrosInitialState)

  const librosFiltrados = libros.filter(libro => {
    const matchBusqueda = libro.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase())
      || libro.autor.toLowerCase().includes(filtros.busqueda.toLowerCase())
    const matchGeneros = filtros.generos.length > 0 ? filtros.generos.includes(libro.genero) : true
    const matchPrecioMin = filtros.precioMin ? libro.precio >= parseInt(filtros.precioMin) : true
    const matchPrecioMax = filtros.precioMax ? libro.precio <= parseInt(filtros.precioMax) : true

    return matchBusqueda && matchGeneros && matchPrecioMin && matchPrecioMax
  }).sort((a, b) => {
    if (filtros.orden === 'precioAsc') {
      return a.precio - b.precio;
    } else if (filtros.orden === 'precioDesc') {
      return b.precio - a.precio;
    } else if (filtros.orden === 'anioAsc') {
      return a.anio - b.anio;
    } else if (filtros.orden === 'anioDesc') {
      return b.anio - a.anio;
    }
    return 0;
  });

  return (
    <Container fluid className="p-0 d-flex contenedor-fluido">
      
      <Filtros 
        setFiltros={setFiltros} 
        filtros={filtros}
        filtrosInitialState={filtrosInitialState}
        
      />
      
      <div className="p-5 w-100 contenido1">
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
            {librosFiltrados.map(libro => (
                <Col key={libro.libro_id} sm={6} md={4} lg={3} className="mb-4">
                  <CardTienda
                    libro={libro}
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