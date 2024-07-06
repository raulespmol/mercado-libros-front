import React from 'react'
import FormPublicacion from '../components/FormPublicacion/FormPublicacion'
import CardDetalle from '../components/CardDetalle/CardDetalle';
import { Container } from 'react-bootstrap'

const CrearPublicacion = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <div className="grid">
        <FormPublicacion />
        <div className='p-3'>
          <h3 className='text-center'>Vista previa</h3>
          <CardDetalle />
        </div>
      </div>
    </Container>
  )
}

export default CrearPublicacion