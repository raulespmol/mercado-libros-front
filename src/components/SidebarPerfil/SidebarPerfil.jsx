import { Button, Card } from "react-bootstrap"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/img/avatar-placeholder.jpg"
import "./style.css"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import LogoutModal from "../LogoutModal/LogoutModal"

const SidebarPerfil = () => {
  const {usuario, logout} = useContext(UserContext)

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

  // Función para determinar si la ruta es exactamente activa
  const isExactActive = (path) => location.pathname === path;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card className="text-center pt-3 px-2 bg-light rounded-0 h-100 w-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-3">
            <img src={usuario ? ( usuario.imagen ? usuario.imagen : avatarPlaceholder) : avatarPlaceholder} alt="Foto perfil" className="avatar-perfil" />
              <h2 className="mb-0">{usuario ? usuario.nombre : "Usuario"}</h2>
          </div>
          <Button 
            variant="dark" 
            className='w-100'
            onClick={() => navigate(`/libros/nuevo`)}
          >
            Crear Publicacion
          </Button>

          <div className='links-perfil container-fluid px-0 mb-3'>
            <NavLink 
              to="/perfil"
              className={({ isActive }) => isActive && isExactActive("/perfil") ? "side-active" : ""}
            >
              <i className="fa-solid fa-user me-2"></i>
              Mi Perfil
            </NavLink>
            <NavLink 
              to="./favoritos"
              className={({ isActive }) => isActive && isExactActive("/perfil/favoritos") ? "side-active" : ""}
            >
              <i className="fa-solid fa-bookmark me-2"></i>
              Mis Favoritos
            </NavLink>
            <NavLink 
              to="./publicaciones"
              className={({ isActive }) => isActive && isExactActive("/perfil/publicaciones") ? "side-active" : ""}
            >
              <i className="fa-solid fa-book me-2"></i>
              Mis Publicaciones
            </NavLink>
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