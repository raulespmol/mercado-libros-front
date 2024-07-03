import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FormPublicacion from '../components/FormPublicacion/FormPublicacion'
import CardTienda from '../components/CardTienda/CardTienda'

const Tienda = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <FormPublicacion /> {/* <--- CAMBIAR POR FILTROS */}
      <div className='p-3'>
        <h3 className='text-center'>Tienda</h3>
        <Container>
          <Row>
            <Col sm={6} md={6}>
              <CardTienda />
            </Col>
            <Col sm={6} md={6}>
              <CardTienda />
            </Col>
            <Col sm={6} md={6}>
              <CardTienda />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default Tienda