import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LogoNav from '../../assets/brand/logo-2.svg'

function Navbar() {
  const { token } = useContext(UserContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  const userNav = () => {
    if (token) {
      return (
        <NavLink to="/perfil" className={setActiveClass}>
          <div className="d-flex text-white">
            <div>
              <i className="fa-solid fa-user me-1"></i>
            </div>
            <div>Perfil</div>
          </div>
        </NavLink>
      );
    } else {
      return (
        <>
          <NavLink to="/registro" className={setActiveClass}>
            <div className="d-flex text-white">
              <div>
                <i className="fa-solid fa-pen-to-square me-1"></i>
              </div>
              <div>Registrarse</div>
            </div>
          </NavLink>
          <NavLink to="/login" className={setActiveClass}>
            <div className="d-flex text-white">
              <div>
                <i className="fa-solid fa-user me-1"></i>
              </div>
              <div>Ingresar</div>
            </div>
          </NavLink>
        </>
      );
    }
  };

  return (
    <BNav expand="lg" className="bg-primary" variant="dark">
      <Container>
        <div className="fs-4 brand">
          <NavLink to="/" className={setActiveClass} >
            <img src={LogoNav} alt="logo" className="logo-nav"/>
            MercadoLibros
          </NavLink>
        </div>
        <BNav.Toggle aria-controls="responsive-navbar-nav" />
        <BNav.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {userNav()}
            <NavLink to="/libros" className={setActiveClass}>
              <div className="d-flex text-white">
                <div>
                  <i className="fa-solid fa-bag-shopping me-1"></i>
                </div>
                <div>Tienda</div>
              </div>
            </NavLink>
            <NavLink to="/carrito" className={setActiveClass}>
              <div className="d-flex text-white">
                <div>
                  <i className="fa-solid fa-cart-shopping me-1"></i>
                </div>
                <div>Carrito</div>
              </div>
            </NavLink>
          </Nav>
        </BNav.Collapse>
      </Container>
    </BNav>
  );
}

export default Navbar;
