import React, { useContext, useState, useEffect } from "react";
import { LibrosContext } from "../context/LibrosContext";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

const FormActualizarPublicacion = ({ libro, onHide }) => {
  const { updateLibro, generos } = useContext(LibrosContext);

  const [libroActualizado, setLibroActualizado] = useState({
    titulo: "",
    descripcion: "",
    genero: "",
    precio: "",
    url_imagen: "",
  });

  useEffect(() => {
    if (libro) {
      setLibroActualizado({
        id: libro.libro_id,
        titulo: libro.titulo,
        descripcion: libro.descripcion,
        genero: libro.genero,
        precio: libro.precio,
        url_imagen: libro.url_imagen,
      });
    }
  }, [libro]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLibro(libroActualizado);
    onHide(); // Cerrar modal
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={libroActualizado.titulo}
              onChange={(e) =>
                setLibroActualizado({
                  ...libroActualizado,
                  titulo: e.target.value,
                })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea" rows={3}
              type="text"
              value={libroActualizado.descripcion}
              onChange={(e) =>
                setLibroActualizado({
                  ...libroActualizado,
                  descripcion: e.target.value,
                })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formGenero">
            <Form.Label>Género</Form.Label>
            <Form.Select
              value={libroActualizado.genero}
              onChange={(e) =>
                setLibroActualizado({
                  ...libroActualizado,
                  genero: e.target.value,
                })
              }
            >
              {generos.map((genero) => (
                <option key={genero.genero_id} value={genero.genero_id}>
                  {genero.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              value={libroActualizado.precio}
              onChange={(e) =>
                setLibroActualizado({
                  ...libroActualizado,
                  precio: e.target.value,
                })
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formUrlImagen">
            <Form.Label>Portada (url de la imagen)</Form.Label>
            <Form.Control
              type="text"
              value={libroActualizado.url_imagen}
              onChange={(e) =>
                setLibroActualizado({
                  ...libroActualizado,
                  url_imagen: e.target.value,
                })
              }
            />
          </Form.Group>
        </Row>
        <Modal.Footer>
          <Row className="mb-3">
            <Col className="text-end">
              <Button variant="primary" type="submit">
                Actualizar
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default FormActualizarPublicacion;
