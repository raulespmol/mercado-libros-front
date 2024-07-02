import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as BNav} from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import "./style.css"

function Navbar() {
  const setActiveClass = ({isActive}) => isActive ? 'active' : ''

  return (
    <BNav expand="lg" className="bg-success" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/">
            MercadoLibros
          </NavLink>
        </Nav>
        <Nav>
          <NavLink to="/registro" className={setActiveClass}>
            Registrarse
          </NavLink>
          <NavLink to="/login" className={setActiveClass}>
            Login
          </NavLink>
          <NavLink to="/carrito" className={setActiveClass}>
            Carrito
          </NavLink>
        </Nav>
      </Container>
    </BNav>
  );
}

export default Navbar;