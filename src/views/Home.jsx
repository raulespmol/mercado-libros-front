import React from 'react'
import Hero from '../components/Hero/Hero'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CardTienda from '../components/CardTienda/CardTienda'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <h2 className='text-center my-5 fw-semibold fs-1'>Tienda</h2>
      <Container>
        <Row>
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
        <Row className='my-3'>
          <Button variant='success'>Ver más</Button>
        </Row>

      </Container>
    </>
  )
}

export default Home