import React from 'react'
import FormPublicacion from '../components/FormPublicacion/FormPublicacion'
import { Container } from 'react-bootstrap'

const CrearPublicacion = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <FormPublicacion />
      <div className='p-3'>
        <h3 className='text-center'>Vista previa</h3>
      </div>
    </Container>
  )
}

export default CrearPublicacion