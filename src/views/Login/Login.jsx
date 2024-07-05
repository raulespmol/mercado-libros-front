import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
// import { UserContext } from "../providers/UserProvider";

const LoginPage = () => {
  //   const { loginWithEmailAndPassword } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await loginWithEmailAndPassword(email, password);
  //     alert(response?.message || "Something went wrong");
  //   };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center p-5">
      <div className="sectionMain bg-white p-5 m-5 border border-1 border-dark-subtle rounded-3">
        <h1>Ingresa tus datos</h1>
        {/* <form onSubmit={handleSubmit}> */}

        <form className="mt-5">
          <Form.Control
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Tu correo electrónico"
          />
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Contraseña"
          />

          <Button
            variant="success"
            type="submit"
            className="w-100 rounded-5 fw-bold"
          >
            Iniciar Sesión
          </Button>
          <div className="goRegister mt-3">
            <hr></hr>
            <p>
              <a href="/registro">Regístrate</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
