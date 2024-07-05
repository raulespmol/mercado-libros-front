import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BNav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import Form from 'react-bootstrap/Form';

import libro1 from '../../assets/img/logo-horizontal.png'
import "./style.css"

function Navbar() {
  const setActiveClass = ({isActive}) => isActive ? 'active' : ''

  return (
    <BNav expand="lg" className="bg-success" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className={`text-light ${setActiveClass}`}>
            MercadoLibros
          </NavLink>
        </Nav>
        <Form className="d-flex mx-auto mt-3">
          <Form.Control type="text" placeholder="Busca tu libro" className="text-black bg-light form-control-sm" style={{ width: '350px' }}/>
        </Form>
        <Nav className="ms-auto">
          <NavLink to="/registro" className={`text-light ${setActiveClass}`}>
            Registrarse
          </NavLink>
          <NavLink to="/login" className={`text-light ${setActiveClass}`}>
            Login
          </NavLink>
          <NavLink to="/carrito" className={`text-light ${setActiveClass}`}>
            Carrito
          </NavLink>
        </Nav>
      </Container>
    </BNav>
  );
}

export default Navbar;