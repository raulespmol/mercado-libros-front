import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import { useNavigate } from "react-router-dom"
import placeholder from "../../assets/img/placeholder.jpg";
import { Badge } from 'react-bootstrap';

//valores por defecto para renderizar mientras se obtienen datos desde el back
//el id de la publicacion se usara para navegar al detalle '/libros/:id'

const CardTienda = ({id, titulo, autor, genero, precio, usuario, img}) => {
  
  const navigate = useNavigate()
  
  return (
    <Card>
      {/* si la dirección de la imagen falla se mostrará placeolder */}
      <Card.Img 
        variant="top" 
        src={img ? img : placeholder} 
        className='imgStyle'
      />
      <Card.Body className='info'>
        <div>
          <h5 className='titulo'>{titulo}</h5>
          <p className='autor m-0'>{autor}</p>
          <Badge bg="success">{genero}</Badge>
        </div>
        <p className='precio'>{precio}</p>
      </Card.Body>
      <Card.Footer>
        <div>
          <span>publicado por</span>
          <p className='usuario'>{usuario}</p>
        </div>
        <Button 
          variant="dark" 
          size='sm'
          onClick={() => navigate(`/libros/${id}`)}
        >
          Ver Detalles
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default CardTienda

