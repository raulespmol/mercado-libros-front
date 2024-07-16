import { Button, Card } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/img/avatar-placeholder.jpg"
import "./style.css"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import LogoutModal from "../LogoutModal/LogoutModal"

const SidebarPerfil = () => {
  const {usuario, logout} = useContext(UserContext)

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card className="text-center sidebar">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="top d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <img src={usuario ? usuario.imagen : avatarPlaceholder} alt="" className="avatar-perfil" />
              <h2 className="mb-0">{usuario ? usuario.nombre : "Usuario"}</h2>
          </div>
          <Button 
            variant="dark" 
            className='w-100'
            onClick={() => navigate(`/libros/nuevo`)}
          >
            Crear Publicacion
          </Button>
          <div className='links-perfil'>
            <NavLink to="/perfil">Mi Perfil</NavLink>
            <NavLink to="./favoritos">Mis Favoritos</NavLink>
            <NavLink to="./publicaciones">Mis Publicaciones</NavLink>
          </div>
        </div>

        <Button 
          variant="outline-dark" 
          className='w-100'
          onClick={handleShowModal}
        >
          Cerrar sesión
        </Button>

        <LogoutModal 
          show={showModal} 
          handleClose={handleCloseModal}
          logout={logout}
        />
      </Card.Body>
    </Card>
  )
}

export default SidebarPerfil