import { useContext, useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap"
import ModalDetalle from "../Modal/ModalDetallePublicacion";
import { CarritoContext } from "../../context/Carrito";


const ItemCarrito = ({libro}) => {
  const{ eliminarDelCarrito } = useContext(CarritoContext)
  const [modalShow, setModalShow] = useState(false);

  const imgStyle = {
    height: "128px",
    objectFit: "cover"
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img src={libro.url_imagen} alt={libro.titulo} style={imgStyle} />

        <div className="d-flex flex-column">
          <h3 className="m-0">{libro.titulo}</h3>
          <span className="fs-5">{libro.autor}</span>

          <div className="d-flex gap-1">
            <Badge bg="secondary">{libro.genero}</Badge>
            <Badge bg="secondary">{libro.editorial}</Badge>
            <Badge bg="secondary">{libro.anio}</Badge>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end justify-content-center">
        <p className="m-0 fw-bold fs-2">{( "$" + libro.precio )}</p>
        <div className="d-flex gap-2">
          <Button 
            variant="outline-dark"
            onClick={() => setModalShow(true)}
          >
            Ver publicacion 
          </Button>
          <ModalDetalle
            show={modalShow}
            onHide={() => setModalShow(false)}
            libro={libro}
          />
          <Button 
            variant="outline-danger"
            onClick={() => eliminarDelCarrito(libro.libro_id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default ItemCarrito