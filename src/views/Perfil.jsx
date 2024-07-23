import { Container } from 'react-bootstrap'
import SidebarPerfil from '../components/SidebarPerfil/SidebarPerfil'
import { Outlet } from 'react-router-dom'

const Perfil = () => {

  return (
    <Container fluid className='p-0 d-flex'>
      <SidebarPerfil />
      <Outlet />
    </Container>
  )
}

export default Perfil