import React, { useState } from 'react'
import FormPublicacion from '../components/FormPublicacion/FormPublicacion'
import CardDetalle from '../components/CardDetalle/CardDetalle';
import { Col, Container, Row } from 'react-bootstrap'

const CrearPublicacion = () => {
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    anio: "",
    genero: "",
    url_imagen: "",
    precio: "",
    descripcion: ""
  })

  return (
    <Container fluid className='p-0 d-flex'>
      <div className="grid w-100">
        <FormPublicacion 
          nuevoLibro={nuevoLibro}
          setNuevoLibro={setNuevoLibro}
        />
        <div className='p-3'>
          <h3 className='text-center'>Vista previa</h3>
          <Row className='justify-content-center'>
            <Col sm={12} lg={8}>
              <CardDetalle nuevoLibro={nuevoLibro} preview/>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default CrearPublicacion