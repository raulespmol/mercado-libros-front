import React, { useState, useContext } from "react";
import { Card, Button, ButtonGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
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

  const editTooltip = (props) => (
    <Tooltip {...props}>
      Editar
    </Tooltip>
  );

  const deleteTooltip = (props) => (
    <Tooltip {...props}>
      Eliminar
    </Tooltip>
  );

  return (
    <>
      <Card className="w-100 h-100 border-0 bg-light card-shadow">
        <Card.Body className="d-flex p-0 border-0 m-0">
          <Card.Img           
            src={libro.url_imagen}
            className="rounded-end-0 w-50 d-none d-xxl-block"
            alt={libro.titulo}
          />
          <div className="d-flex flex-column justify-content-between flex-grow-1 p-3">
           
            <div className="d-flex gap-3">
                <div className="col-3 d-xxl-none">
                  <Card.Img           
                    src={libro.url_imagen}
                    className="rounded w-100 d-xxl-none"
                    alt={libro.titulo}
                    />
                </div>
              
                <div>             
                  <Card.Subtitle className="my-xs-0 my-sm-2 text-muted">
                    <span className="fs-fecha">
                      Publicado el:
                      <i className="fa-regular fa-calendar me-1 ms-2"></i>
                      {datosFormateados.Fecha(libro.fecha_publicacion)}
                    </span>
                  </Card.Subtitle>
                  <h6 className="fw-bold text-primary fs-5">{libro.titulo}</h6>
                  <Card.Text className="mb-2 text-muted">
                    <i className="fa-solid fa-tag me-1 text-primary"></i>{libro.genero}
                  </Card.Text>
                </div>
            </div>

            <hr />

            <div>
              <Card.Text className="desc">{libro.descripcion}</Card.Text>
              <Card.Text className="text-dark fs-5 fw-bold">
                {datosFormateados.formatoCLP(libro.precio)}
              </Card.Text>
            </div>
            <div className="d-flex justify-content-end">    
              <ButtonGroup className="gap-3">
                <OverlayTrigger 
                  placement="top-start" 
                  delay={{ show: 250, hide: 250 }} 
                  overlay={editTooltip} 
                >
                  <Button 
                    className="rounded-pill"
                    variant="secondary"
                    onClick={() => setModalShow(true)}
                  >
                    <i className="fa-solid fa-pen-to-square text-primary"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top-start"
                  delay={{ show: 250, hide: 250 }}
                  overlay={deleteTooltip}
                >
                  <Button
                    className="rounded-pill"
                    variant="primary"
                    onClick={() => setModalEliminarShow(true)}
                  >
                    
                    <i class="fa-regular fa-trash-can text-light"></i>
                  </Button>
                </OverlayTrigger>
              </ButtonGroup>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-0">
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
