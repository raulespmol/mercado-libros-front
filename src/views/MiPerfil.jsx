import React from 'react'
import { Container } from 'react-bootstrap'
import SidebarPerfil from '../components/SidebarPerfil/SidebarPerfil'

const CrearPublicacion = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <SidebarPerfil />
      <div className='p-3'>
        <h3 className='text-center'>Bienvenido Usuario</h3>
      </div>
    </Container>
  )
}

export default CrearPublicacion