import { Badge, Button, ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const ItemCarrito = ({libro}) => {
  const navigate = useNavigate()

  const imgStyle = {
    height: "128px"
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img src={libro.img} alt={libro.titulo} style={imgStyle} />

        <div className="d-flex flex-column">
          <h3 className="m-0">{libro.titulo}</h3>
          <span className="fs-5">{libro.autor}</span>

          <div className="d-flex gap-1">
            <Badge bg="secondary">{libro.genero}</Badge>
            <Badge bg="secondary">{libro.editorial}</Badge>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end justify-content-center">
        <p className="m-0 fw-bold fs-2">{libro.precio}</p>
        <div className="d-flex gap-2">
          <Button 
            variant="outline-dark"
            onClick={() => navigate(`/libros/${libro.id_libro}`)}
          >
            Ver publicacion 
          </Button>
          <Button 
            variant="dark"
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default ItemCarrito