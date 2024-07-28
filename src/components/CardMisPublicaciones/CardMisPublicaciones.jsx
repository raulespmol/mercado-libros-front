import React, {useState, useContext} from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import ModalActualizarPublicacion from "../Modal/ModalActualizarPublicación";
import ModalEliminarPublicacion from '../Modal/ModalEliminarPublicacion';
import { LibrosContext } from '../../context/LibrosContext'
import "./style.css";

const CardMisPublicaciones = ({ libro }) => {
  const { deleteLibro } = useContext(LibrosContext);
  const handleEliminar = async (libroId) => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar este libro?");
    if (confirmacion) {
      await deleteLibro(libroId);
    }
  };
  //estado para mostrar el modal
  const [modalShow, setModalShow] = useState(false);
  const [modalEliminarShow, setModalEliminarShow] = useState(false);

  console.log('Libro en CardMisPublicaciones:', libro); 

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth();
    const año = date.getFullYear();
    return `${dia}/${mes}/${año}`;
  };



  return (
    <>
      <Card className="w-100 h-100">
        <Card.Body className="d-flex p-0">
          <Card.Img
            variant="top"
            src={libro.url_imagen}
            className="imagen rounded-end-0"
            style={{ width: "40%" }}
          />
          <div className="flex-grow-1 p-2">
            <Card.Subtitle className="mb-2 text-muted pt-2">
              <span className="text-secondary">Publicado el:
                <i className="fa-regular fa-calendar me-1 ms-2"></i>
                {formatearFecha(libro.fecha_publicacion)}
              </span>
            </Card.Subtitle>
            <h6 className="fw-bold">{libro.titulo}</h6>
            <Card.Text className="desc">{libro.descripcion}</Card.Text>
            <Card.Text className="text-dark">${libro.precio}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between p-1">         

          <ButtonGroup className="w-100">
            <Button variant="light" onClick={() => setModalShow(true)}>
              <i className="fa-solid fa-pencil text-success"></i>
              <span className="ms-2">editar</span>
            </Button>

            <Button variant="light" onClick={() => setModalEliminarShow(true)}>
              <i className="fa-solid fa-trash text-danger-emphasis"></i>
              <span className="ms-2">eliminar</span>
            </Button>
          </ButtonGroup>

          <ModalActualizarPublicacion
            show={modalShow}
            onHide={() => setModalShow(false)}
            libro={libro}
          />
            <ModalEliminarPublicacion
  show={modalEliminarShow}
  onHide={() => setModalEliminarShow(false)}
  libro={libro}
  onEliminar={handleEliminar} 
/>
        </Card.Footer>
        
      </Card>
    </>
  );
};

export default CardMisPublicaciones;
