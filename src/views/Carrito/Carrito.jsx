import ItemCarrito from '../../components/ItemCarrito/ItemCarrito'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { CarritoContext } from '../../context/Carrito'
import datosFormateados from "../../helpers/formateosGeneral";
import "./style.css"
import { NavLink } from 'react-router-dom';

const Carrito = () => {
  const { carrito } = useContext(CarritoContext)

  const total = carrito.reduce((a, b) => a + b.precio, 0)

  return (
    <Container className='my-5 carrito'>
      <Row  className="justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Header>
              <Card.Title className='fs-2 text-center'>Carrito</Card.Title>
            </Card.Header>
            <Card.Body>
              {carrito.length
              ? <ListGroup variant='flush'>
                  { carrito.map(libro => <ItemCarrito libro={libro} key={libro.libro_id}/>) }
                </ListGroup>
              : <p className='m-0 text-center'>
                  No se han agregado libros al carrito, explora la <NavLink to="/libros">Tienda</NavLink>
                </p>
              }
            </Card.Body>
            {carrito.length > 0 && 
              <Card.Footer className='d-flex justify-content-end align-items-center gap-2'>
                <p className='m-0 fs-5 fw-semibold'>Total: {datosFormateados.formatoCLP(total)}</p>
                <Button variant='primary'>Pagar</Button>
              </Card.Footer>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Carrito