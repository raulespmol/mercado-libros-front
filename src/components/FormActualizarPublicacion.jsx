import React, { useContext, useState, useEffect } from "react";
import { LibrosContext } from "../context/LibrosContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        <Form.Group controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={libroActualizado.titulo}
            onChange={(e) =>
              setLibroActualizado({ ...libroActualizado, titulo: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={libroActualizado.descripcion}
            onChange={(e) =>
              setLibroActualizado({ ...libroActualizado, descripcion: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formGenero">
          <Form.Label>Género</Form.Label>
          <Form.Select
            size="lg"
            value={libroActualizado.genero}
            onChange={(e) =>
              setLibroActualizado({ ...libroActualizado, genero: e.target.value })
            }
          >
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={libroActualizado.precio}
            onChange={(e) =>
              setLibroActualizado({ ...libroActualizado, precio: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formUrlImagen">
          <Form.Label>URL de la Imagen</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={libroActualizado.url_imagen}
            onChange={(e) =>
              setLibroActualizado({ ...libroActualizado, url_imagen: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </>
  );
};

export default FormActualizarPublicacion;
