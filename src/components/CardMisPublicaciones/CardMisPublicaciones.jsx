import React, { useState, useContext } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import ModalActualizarPublicacion from "../Modal/ModalActualizarPublicación";
import ModalEliminarPublicacion from "../Modal/ModalEliminarPublicacion";
import { LibrosContext } from "../../context/LibrosContext";
import datosFormateados from "../../helpers/formateosGeneral";
import "./style.css";

const CardMisPublicaciones = ({ libro }) => {
  const { deleteLibro } = useContext(LibrosContext);
  
  const handleEliminar = async (libroId) => {
    await deleteLibro(libroId);
  };

  // Estado para mostrar el modal
  const [modalShow, setModalShow] = useState(false);
  const [modalEliminarShow, setModalEliminarShow] = useState(false);

  return (
    <>
<Card className="w-100 h-100 card-shadow border-0">
  <Card.Body className="d-flex p-0 border-0 m-0">
    <Card.Img
      variant="top"
      src={libro.url_imagen}
      className="imagen rounded-end-0"
      style={{ width: "40%" }}
    />
    <div className="flex-grow-1 p-2 bg-light">
      <Card.Subtitle className="mb-2 text-muted pt-2">
        <span className="text-muted">
          Publicado el:
          <i className="fa-regular fa-calendar me-1 ms-2"></i>
          {datosFormateados.Fecha(libro.fecha_publicacion)}
        </span>
      </Card.Subtitle>
      <h6 className="fw-bold text-primary fs-5">{libro.titulo}</h6>
      <Card.Text className="mb-2 text-muted">
        
        <i className="fa-solid fa-tag me-1"></i>
        {libro.genero}
      </Card.Text>
      <Card.Text className="desc">{libro.descripcion}</Card.Text>
      <Card.Text className="text-dark fs-5 fw-bold">{datosFormateados.formatoCLP(libro.precio)}</Card.Text>
    </div>
  </Card.Body>
  <Card.Footer className="d-flex justify-content-between p-0">
    <ButtonGroup className="w-100">
      <Button variant="outline-light" className="rounded-top-0" onClick={() => setModalShow(true)}>
        <i className="fa-solid fa-pen-to-square text-primary"></i>
        <span className="ms-2 text-dark fw-light text-uppercase">editar</span>
      </Button>

      <Button variant="danger" className="rounded-top-0" onClick={() => setModalEliminarShow(true)}>
        <i className="fa-solid fa-trash text-white"></i>
        <span className="ms-2 text-white fw-light text-uppercase">eliminar</span>
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
