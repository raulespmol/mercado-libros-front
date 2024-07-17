import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import placeholder from "../../assets/img/placeholder.jpg";
import { Badge } from "react-bootstrap";
import ModalDetalle from "../Modal/ModalDetallePublicacion";

//valores por defecto para renderizar mientras se obtienen datos desde el back
//el id de la publicacion se usara para navegar al detalle '/libros/:id'

const CardTienda = ({ id, titulo, autor, genero, precio, usuario, img }) => {
  // const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const libro = {
    id,
    titulo,
    autor,
    genero,
    precio,
    usuario,
    url_imagen: img ? img : placeholder,
  };

  return (
    <Card>
      {/* si la dirección de la imagen falla se mostrará placeolder */}
      <Card.Img
        variant="top"
        // src={img ? img : placeholder}
        src={libro.url_imagen}
        className="imgStyle"
      />
      <Card.Body className="info">
        <div>
          <h5 className="titulo">{titulo}</h5>
          <p className="autor m-0">{autor}</p>
          <Badge bg="success">{genero}</Badge>
        </div>
        <p className="precio">{precio}</p>
      </Card.Body>
      <Card.Footer>
        <div>
          <span>publicado por</span>
          <p className="usuario">{usuario}</p>
        </div>
        <Button
          variant="dark"
          size="sm"
          // onClick={() => navigate(`/libros/libro/${id}`)}
          onClick={() => setModalShow(true)}
        >
          Ver Detalles
        </Button>
        <ModalDetalle
          show={modalShow}
          onHide={() => setModalShow(false)}
          libro={libro}
        />
      </Card.Footer>
    </Card>
  );
};

export default CardTienda;
