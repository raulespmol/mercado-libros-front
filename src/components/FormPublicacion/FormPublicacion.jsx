import React from 'react';
import './style.css';
import { Form, Button, Card } from 'react-bootstrap';

const FormPublicacion = () => {
  return (
    <Card className="text-center sidebar">
      <Card.Body className='formulario'>
        <h2 className="mb-4">Crear Publicación</h2>
        <Form className='w-100'>
          <Form.Group controlId="formTitulo">
            <Form.Control type="text" placeholder="Título" />
          </Form.Group>

          <Form.Group controlId="formAutor">
            <Form.Control type="text" placeholder="Autor" />
          </Form.Group>

          <Form.Group controlId="formEditorial">
            <Form.Control type="text" placeholder="Editorial" />
          </Form.Group>

          <Form.Group controlId="formAno">
            <Form.Control type="text" placeholder="Año" />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Control as="select" custom>
              <option>Genero</option>
              <option>Ficción</option>
              <option>No Ficción</option>
              <option>Misterio</option>
              <option>Biografía</option>
              <option>Otros</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formURLPortada">
            <Form.Control type="text" placeholder="URL Portada / Imagen"/>
          </Form.Group>

          <Form.Group controlId="formPrecio">
            <Form.Control type="text" placeholder="Precio"/>
          </Form.Group>

          <Form.Group controlId="formResena">
            <Form.Control as="textarea" rows={5} placeholder="Reseña / Descripción / Detalles" />
          </Form.Group>

          <Button variant="dark" className='w-100'>Publicar</Button>
        </Form>

      </Card.Body>
    </Card>
  );
}

export default FormPublicacion;
