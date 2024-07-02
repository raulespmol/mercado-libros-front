import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

//valores por defecto para renderizar mientras se obtienen datos desde el back
//el id de la publicacion se usara para navegar al detalle '/libros/:id'
const CardTienda = ({id, titulo = "Titulo", autor = "Autor", precio = "$9.999", usuario="Raul Espinoza", imagen}) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='info'>
        <div>
          <h5 className='titulo'>{titulo}</h5>
          <span className='autor'>{autor}</span>
        </div>
        <p className='precio'>{precio}</p>
      </Card.Body>
      <Card.Footer>
        <div>
          <span>publicado por</span>
          <p className='usuario'>{usuario}</p>
        </div>
        <Button variant="dark" size='sm'>Ver Detalles</Button>
      </Card.Footer>
    </Card>
  )
}

export default CardTienda

