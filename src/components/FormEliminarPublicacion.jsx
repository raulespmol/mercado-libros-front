import React from 'react';
import { Button } from 'react-bootstrap';

const FormEliminarPublicacion = ({ libro, onEliminar, onCancel }) => {
  console.log('Libro en FormEliminarPublicacion:', libro); // Verifica el contenido del libro

  return (
    <>
      <p>Usted está a pasos de eliminar el siguiente libro:</p>
      <strong>{libro.titulo}</strong>
      <p>¿Desea continuar?</p>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={onCancel}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={() => onEliminar(libro.libro_id)} 
          className="ms-2"
        >
          Sí, eliminar
        </Button>
      </div>
    </>
  );
};

export default FormEliminarPublicacion;
