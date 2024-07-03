import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardTienda from '../components/CardTienda/CardTienda'
import Filtros from '../components/Filtros/Filtros'

const Tienda = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <Filtros />
      <div className='p-3'>
        <h3 className='text-center'>Tienda</h3>
        <Container>
          {/* Renderizar con .map() los datos traidos desde la API */}
          <Row>
            <Col sm={6} md={4}>
              <CardTienda 
                id={1}
                titulo='Harry Potter'
                autor='J.K. Rowling'
                precio='$12.000'
                usuario='Raúl Espinoza'
              />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda 
                id={2}
                titulo='Don Quijote de la Mancha'
                autor='Miguel de Cervantes'
                precio='$10.000'
                usuario='Fernando Olivares'
              />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda 
                id={3}
                titulo='El señor de los anillos'
                autor='J.R.R. Tolkien'
                precio='$15.000'
                usuario='Yerko Browton'
              />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda />
            </Col>
            <Col sm={6} md={4}>
              <CardTienda />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default Tienda