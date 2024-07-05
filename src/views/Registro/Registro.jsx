import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import "./style.css";
// import { UserContext } from "../providers/UserProvider";

const Registro = () => {
  // const { registerWithEmailAndPassword } = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await registerWithEmailAndPassword(nombre, email, password, confirmarPassword);
  //   console.log(response)
  //   alert(response?.message || "Something went wrong");
  // };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center p-5">
      <div className="sectionMain bg-white p-5 border border-1 border-dark-subtle rounded-3">
        <div className="px-3 mx-4 mb-5">
          <h1>¡Te damos la bienvenida a Mercadolibros Chile!</h1>
          <h3>Crea tu cuenta y empieza a vender o comprar libros a miles de personas.</h3>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <Form.Control
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-control"
            placeholder="Nombre"
          />
          <Form.Control
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Correo electrónico de contacto"
          />
          <Form.Control
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Contraseña"
          />
          <Form.Control
              type="password"
              id="confirmarPassword"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
              className="form-control"
              placeholder="Confirma tu contraseña"
          />
          <Button variant="success"  type="submit" className="w-100 rounded-5 fw-bold">
            Crear cuenta
          </Button>
          <hr></hr>
          <div className="goLogin mt-3">
            <p>
              ¿Ya tienes cuenta? <a href="/login">inicia tu sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registro;
