import { Button, Card, Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./style.css"

const SidebarPerfil = () => {
  return (
    <Card className="text-center sidebar">
      <Card.Body>
        <div className="top">
          <div className="d-flex">
            <h2 className="mb-4">Usuario</h2>
          </div>
          <Button variant="dark" className='w-100'>Crear Publicacion</Button>
          <div className='links-perfil'>
            <NavLink to="/perfil">Mi Perfil</NavLink>
            <NavLink to="./favoritos">Mis Favoritos</NavLink>
            <NavLink to="./publicaciones">Mis Publicaciones</NavLink>
          </div>
        </div>

        <Button variant="outline-dark" className='w-100 me-auto'>Cerrar sesión</Button>
      </Card.Body>
    </Card>
  )
}

export default SidebarPerfil