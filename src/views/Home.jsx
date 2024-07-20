import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { LibrosContext } from '../context/LibrosContext'
import Hero from '../components/Hero/Hero'
import CardTienda from '../components/CardTienda/CardTienda'
import SectionFeatures from '../components/SectionFeatures/SectionFeatures'

const Home = () => {
  const navigate = useNavigate()
  const { libros } = useContext(LibrosContext)
  
  const primerosLibros = libros.slice(0, 4)

  return (
    <>
      <Hero />
      <SectionFeatures/>
      <h2 className='text-center my-5 fw-semibold fs-1'>Tienda</h2>
      <Container>
        <Row>
          {primerosLibros.map(libro => (
            <Col key={libro.libro_id} sm={12} md={4} lg={3} className="mb-2">
              <CardTienda libro={libro} />
            </Col>
            ))
          }
        </Row>
        <Row className='mb-4'>
          <Col>
            <Button 
              className="w-100"
              variant="dark"
              onClick={() => navigate('/libros')}
            >
              Ver más
            </Button>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Home