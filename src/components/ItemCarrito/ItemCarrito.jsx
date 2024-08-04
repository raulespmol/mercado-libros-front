import { useContext, useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import ModalDetalle from "../Modal/ModalDetallePublicacion";
import { CarritoContext } from "../../context/Carrito";
import datosFormateados from "../../helpers/formateosGeneral";

const ItemCarrito = ({ libro }) => {
  const { eliminarDelCarrito } = useContext(CarritoContext);
  const [modalShow, setModalShow] = useState(false);

  const imgStyle = {
    height: "128px",
    objectFit: "cover",
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between flex-column flex-md-row">
      <div className="d-flex align-items-center gap-3 flex-column flex-md-row">
        <img src={libro.url_imagen} alt={libro.titulo} style={imgStyle} />

        <div className="d-flex flex-column">
          <h3 className="m-0">{libro.titulo}</h3>
          <span className="fs-5">{libro.autor}</span>

          <div className="d-flex flex-wrap gap-1 unique-badge-container">
            <Badge bg="dark">{libro.genero}</Badge>
            <Badge bg="dark">{libro.editorial}</Badge>
            <Badge bg="dark">{libro.anio}</Badge>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end justify-content-center mt-3 mt-md-0 unique-price-button-container">
        <p className="m-0 fw-bold fs-2 unique-price">{datosFormateados.formatoCLP(libro.precio)}</p>
        <div className="d-flex gap-2 unique-button-container">
          <Button variant="outline-dark" onClick={() => setModalShow(true)}>
            Ver publicacion
          </Button>
          <ModalDetalle show={modalShow} onHide={() => setModalShow(false)} libro={libro} />
          <Button variant="outline-danger" onClick={() => eliminarDelCarrito(libro.libro_id)}>
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ItemCarrito;
