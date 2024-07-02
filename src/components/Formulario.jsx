import React from 'react';
import './App.css';
import { Form, Button, Card } from 'react-bootstrap';

const Formulario = () => {
  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card className="text-center">
        <Card.Body>
          <h2 className="mb-4">Crear Publicación</h2>

          <Form style={{ maxWidth: '400px', margin: 'auto' }}>
            <Form.Group controlId="formTitulo" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="Título" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formAutor" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="Autor" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formEditorial" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="Editorial" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formAno" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="Año" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formGenero" style={{ marginBottom: '15px' }}>
              <Form.Control as="select" custom style={{ width: '100%' }}>
                <option>Genero</option>
                <option>Ficción</option>
                <option>No Ficción</option>
                <option>Misterio</option>
                <option>Biografía</option>
                <option>Otros</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formURLPortada" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="URL Portada / Imagen" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formPrecio" style={{ marginBottom: '15px' }}>
              <Form.Control type="text" placeholder="Precio" style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group controlId="formResena" style={{ marginBottom: '15px' }}>
              <Form.Control as="textarea" rows={5} placeholder="Reseña / Descripción / Detalles" style={{ width: '100%' }} />
            </Form.Group>

            <Button variant="dark">Publicar</Button>
          </Form>

        </Card.Body>
      </Card>
    </div>
  );
}

export default Formulario;
