import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { token } = useContext(UserContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  const userNav = () => {
    if (token) {
      return (
        <Nav.Link as={NavLink} to="/perfil" className={setActiveClass}>
          <div className="d-flex text-white">
            <div>
              <i className="fa-solid fa-user me-1"></i>
            </div>
            <div>Perfil</div>
          </div>
        </Nav.Link>
      );
    } else {
      return (
        <>
          <Nav.Link as={NavLink} to="/registro" className={setActiveClass}>
            <div className="d-flex text-white">
              <div>
                <i className="fa-solid fa-pen-to-square me-1"></i>
              </div>
              <div>Registrarse</div>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
            <div className="d-flex text-white">
              <div>
                <i className="fa-solid fa-user me-1"></i>
              </div>
              <div>Ingresar</div>
            </div>
          </Nav.Link>
        </>
      );
    }
  };

  return (
    <BNav expand="lg" className="bg-success" variant="dark">
      <Container>
        <BNav.Brand as={NavLink} to="/" className={setActiveClass}>
          Mercadolibros
        </BNav.Brand>
        <BNav.Toggle aria-controls="responsive-navbar-nav" />
        <BNav.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {userNav()}
            <Nav.Link as={NavLink} to="/libros" className={setActiveClass}>
              <div className="d-flex text-white">
                <div>
                  <i className="fa-solid fa-bag-shopping me-1"></i>
                </div>
                <div>Tienda</div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
              <div className="d-flex text-white">
                <div>
                  <i className="fa-solid fa-cart-shopping me-1"></i>
                </div>
                <div>Carrito</div>
              </div>
            </Nav.Link>
          </Nav>
        </BNav.Collapse>
      </Container>
    </BNav>
  );
}

export default Navbar;
