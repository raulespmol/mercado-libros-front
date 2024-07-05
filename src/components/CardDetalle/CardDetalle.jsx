import React from 'react'
import { Badge, Button, Card, Col, Row, Stack } from 'react-bootstrap'
import "./style.css"
import placeholder from "../../assets/img/placeholder.jpg"

const CardDetalle = ({id}) => {

  return (
    <Row className='pt-3 mb-3'>
        <Col lg={6} xl={5}>
          <Card>
            <Card.Img src={placeholder}/>
          </Card>        
        </Col>
        <Col lg={6} xl={7}>

          <h2>Publicacion {id}</h2>
          <p className='mb-3'>Autor</p>

          <hr />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error deserunt quos, reiciendis architecto sint at labore quibusdam corporis, aperiam adipisci iste molestias aut. Nostrum quaerat tempora esse voluptate amet!</p>
          <Stack direction="horizontal" gap={2}>
            <Badge bg="secondary">Genero</Badge>
            <Badge bg="secondary">Editorial</Badge>
          </Stack>

          <hr />

          <span>publicado por</span>
          <p className='usuario'>Usuario</p>

          <hr />

          <div className='d-flex justify-content-between align-items-center'>
            <span className='precio'>$9.999</span>
            <div className='d-flex gap-2'>
              <Button variant='warning'>+ Favoritos</Button>
              <Button variant='success'>+ Carrito</Button>
            </div>
          </div>
        </Col>
      </Row>
  )
}

export default CardDetalle