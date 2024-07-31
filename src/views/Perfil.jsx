import { Container, Row, Col } from "react-bootstrap";
import SidebarPerfil from "../components/SidebarPerfil/SidebarPerfil";
import { Outlet } from "react-router-dom";

const Perfil = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={12} md={4} lg={3} xl={2} className="p-0">
          <SidebarPerfil />
        </Col>
        <Col xs={12} md={8} lg={9} xl={10} className="p-0">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
