import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as BNav} from 'react-bootstrap';

function Navbar() {
  return (
    <BNav expand="lg" className="bg-success" variant="dark">
      <Container>
        <Nav className="me-auto">
          <BNav.Brand href='#'>MercadoLibros</BNav.Brand> 
        </Nav>
        <Nav>
          <Nav.Link>Registrar</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Carrito</Nav.Link>
        </Nav>
      </Container>
    </BNav>
  );
}

export default Navbar;