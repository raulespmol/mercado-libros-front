import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import avatarPlaceholder from "../assets/img/avatar-placeholder.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const MisDatos = () => {
  const { usuario } = useContext(UserContext);

  const imgStyle = {
    width: "170px",
    height: "170px",
    borderRadius: "100%",
    objectFit: "cover",
  };

  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    imagen: "",
  });

  useEffect(() => {
    if (usuario) {
      setDatosUsuario(usuario);
    }
  }, [usuario]);

  const handleDatos = (e) => {
    const { name, value } = e.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row className="pt-3 mb-3 justify-content-center">
        <Col sm={12} md={7}>
          <h2 className="mb-4">
            Bienvenido {usuario ? usuario.nombre : "Usuario"}
          </h2>
          <Card>
            <Card.Body className="d-flex flex-column p-3">
              <div className="d-flex gap-3 mb-3">
                <div>

                <img
                  src={usuario ? usuario.imagen : avatarPlaceholder}
                  alt="imagen de perfil"
                  style={imgStyle}
                  />
                  </div>
                <div className="container d-flex flex-column flex-fill">
                  <h5 className="fw-semibold text-success">Datos Personales</h5>

                  <div className="row">
                    <Form.Group controlId="nombreUsuario" className="col-6">
                      <Form.Label className="m-0">Nombre</Form.Label>
                      <Form.Control
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        value={datosUsuario.nombre ? datosUsuario.nombre : ""}
                        onChange={handleDatos}
                        className="fw-light"
                      />
                    </Form.Group>

                    <Form.Group controlId="apellidoUsuario" className="col-6">
                      <Form.Label className="m-0">Apellido</Form.Label>
                      <Form.Control
                        name="apellidos"
                        type="text"
                        placeholder="Apellido"
                        value={
                          datosUsuario.apellidos ? datosUsuario.apellidos : ""
                        }
                        onChange={handleDatos}
                        className="fw-light"
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group controlId="imagenUsuario" className="col-12">
                      <Form.Label className="m-0">Imagen de perfil</Form.Label>
                      <Form.Control
                        name="imagen"
                        type="text"
                        placeholder="url de la imagen"
                        className="mb-0 fw-light"
                        value={datosUsuario.imagen ? datosUsuario.imagen : ""}
                        onChange={handleDatos}                       
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <div className="container d-flex flex-column gap-3">
                <h5 className="fw-semibold text-success">Información de contacto</h5>

                <div className="row">
                  <Form.Group controlId="telefonoUsuario" className="col-6">
                    <Form.Label className="m-0">Teléfono</Form.Label>
                    <Form.Control
                      name="telefono"
                      type="text"
                      placeholder="+569 1234 5678"
                      className="mb-0 fw-light"
                      value={datosUsuario.telefono ? datosUsuario.telefono : ""}
                      onChange={handleDatos}
                    />
                  </Form.Group>
                  <Form.Group controlId="correoUsuario" className="col-6">
                    <Form.Label className="m-0">Correo</Form.Label>
                    <Form.Control
                      name="email"
                      type="text"
                      placeholder="usuario@correo.cl"
                      className="mb-0 fw-light"
                      value={datosUsuario.email ? datosUsuario.email : ""}
                      onChange={handleDatos}
                    />
                  </Form.Group>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="justify-content-end gap-2">
              <Button variant="outline-dark">Cambiar Contraseña</Button>
              <Button variant="dark">Actualizar Datos</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MisDatos;
