import ItemCarrito from '../components/ItemCarrito/ItemCarrito'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import placeholder from "../assets/img/placeholder.jpg"

const Carrito = () => {
  // Array temporal
  const itemsCarrito = [
    {
      id: 1,
      id_libro: 1,
      img: placeholder,
      titulo: "Libro 1",
      autor: "Autor 1",
      genero: "Accion",
      editorial: "Editorial",
      precio: "$10.000",
    },
    {
      id: 2,
      id_libro: 3,
      img: placeholder,
      titulo: "Libro 3",
      autor: "Autor 3",
      genero: "Terror",
      editorial: "Editorial",
      precio: "$12.000",
    },
    {
      id: 3,
      id_libro: 7,
      img: placeholder,
      titulo: "Libro 7",
      autor: "Autor 7",
      genero: "Drama",
      editorial: "Editorial",
      precio: "$15.000",
    }
  ]

  return (
    <Container className='my-5'>
      <Row  className="justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Header>
              <Card.Title className='fs-2 text-center'>Carrito</Card.Title>
            </Card.Header>
            <Card.Body>
              {itemsCarrito.length
              ? <ListGroup variant='flush'>
                  { itemsCarrito.map(item => <ItemCarrito libro={item} key={item.id}/>) }
                </ListGroup>
              : <p className='m-0 text-center'>No se han agregado items al carrito</p>
              }
            </Card.Body>
            {itemsCarrito.length > 0 && 
              <Card.Footer className='d-flex justify-content-end align-items-center gap-2'>
                <p className='m-0 fs-5 fw-semibold'>Total: $9999</p>
                <Button variant='success'>Pagar</Button>
              </Card.Footer>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Carrito