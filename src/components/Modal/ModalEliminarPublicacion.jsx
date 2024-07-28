import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalEliminarPublicacion = ({ show, onHide, libro, onEliminar }) => {

  const handleEliminar = () => {
    if (libro && libro.libro_id) {
      onEliminar(libro.libro_id);
    }
    onHide(); 
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que quieres eliminar el libro "{libro.titulo}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleEliminar}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEliminarPublicacion;
