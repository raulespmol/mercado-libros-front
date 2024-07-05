import React from 'react'
import { Container, } from 'react-bootstrap'
import SidebarPerfil from '../components/SidebarPerfil/SidebarPerfil'
import CardPublicacion from '../components/CardPublicacion/CardPublicacion'
import '../components/CardPublicacion/style.css'

const MisPublicaciones = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <SidebarPerfil />
      <CardPublicacion />
    </Container>
  )
}


export default MisPublicaciones