import { Container } from 'react-bootstrap'
import SidebarPerfil from '../components/SidebarPerfil/SidebarPerfil'
import { Outlet } from 'react-router-dom'
import { FavoritosProvider } from '../context/FavoritosContext'

const Perfil = () => {
  return (
    <Container fluid className='p-0 d-flex'>
      <FavoritosProvider>
        <SidebarPerfil />
        <Outlet />
      </FavoritosProvider>
    </Container>
  )
}

export default Perfil