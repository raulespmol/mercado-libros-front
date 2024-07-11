import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import "./style.css";
import { validateNuevoUsuario } from "../../utils/validateUser";
import Alert from "../../components/Alert/Alert";
import { UserContext } from "../../context/UserProvider";

const Registro = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const [alert, setAlert] = useState({
    msg: "",
    color: ""
  })

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: ""
  })

  const handleNuevoUsuario = (e) => {
    const {name, value} = e.target

    setNuevoUsuario({
      ...nuevoUsuario, 
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( validateNuevoUsuario(nuevoUsuario, setAlert) ){
      const {nombre, email, password} = nuevoUsuario
      console.log('submit');
      const response = await registerWithEmailAndPassword(nombre, email, password);
      console.log(response)
    }
    // alert(response?.message || "Something went wrong");
  };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center p-5">
      <div className="sectionMain bg-white p-5 border border-1 border-dark-subtle rounded-3">
        <div className="px-3 mx-4 mb-5">
          <h1>¡Te damos la bienvenida a MercadoLibros Chile!</h1>
          <h3>Crea tu cuenta y empieza a vender o comprar libros a miles de personas.</h3>
        </div>
        <form onSubmit={handleSubmit}>
        {/* <form> */}
          <Form.Control
            type="text"
            name="nombre"
            value={nuevoUsuario.nombre}
            onChange={handleNuevoUsuario}
            className="form-control"
            placeholder="Nombre"
          />
          <Form.Control
            type="email"
            name="email"
            value={nuevoUsuario.email}
            onChange={handleNuevoUsuario}
            className="form-control"
            placeholder="Correo electrónico de contacto"
          />
          <Form.Control
            type="password"
            name="password"
            value={nuevoUsuario.password}
            onChange={handleNuevoUsuario}
            className="form-control"
            placeholder="Contraseña"
          />
          <Form.Control
            type="password"
            name="confirmarPassword"
            value={nuevoUsuario.confirmarPassword}
            onChange={handleNuevoUsuario}
            className="form-control"
            placeholder="Confirma tu contraseña"
          />
          <Button variant="success"  type="submit" className="w-100 rounded-5 fw-bold">
            Crear cuenta
          </Button>
          <hr></hr>
          {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}
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
