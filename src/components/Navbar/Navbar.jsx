import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <BNav expand="lg" className="bg-success" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className={setActiveClass}>
            Mercadolibros
          </NavLink>
        </Nav>
        <Form className="d-flex">
          <Form.Control type="text" placeholder="Busca tu libro" className="text-black bg-light form-control-sm m-0" style={{ width: '350px' }}/>
        </Form>
        <Nav>
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
          <NavLink to="/carrito" className={setActiveClass}>
            <div className="d-flex text-white">
              <div>
                <i className="fa-solid fa-bag-shopping me-1"></i>
              </div>
              <div>Carrito</div>
            </div>
          </NavLink>
        </Nav>
      </Container>
    </BNav>
  );
}

export default Navbar;