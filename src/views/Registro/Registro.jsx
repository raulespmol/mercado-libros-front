import { useContext, useState } from "react";
import { validateNuevoUsuario } from "../../utils/validateUser";
import Alert from "../../components/Alert/Alert";
import { UserContext } from "../../context/UserContext";
import { Form, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

const Registro = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: ""
  })

  const [alert, setAlert] = useState({
    msg: "",
    color: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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
      setIsSubmitting(true)
      const {nombre, email, password} = nuevoUsuario
      const response = await registerWithEmailAndPassword(nombre, email, password);
      
      if(response.error){
        setAlert({msg: response.msg, color: 'danger'})
        setIsSubmitting(false)
        return
      }

      setAlert({msg: 'Registro exitoso!', color: 'success'})
      setNuevoUsuario({
        nombre: "",
        email: "",
        password: "",
        confirmarPassword: ""
      })
      setIsSubmitting(false)

      setTimeout(() => {
        setAlert({msg: '', color: ''})
      }, 3000);
    }
  };

  return (
    <div className="container-fluid bg-light d-flex justify-content-center p-5">
      <div className="sectionMain bg-white p-5 border border-1 border-dark-subtle rounded-3">
        <div className="px-3 mx-4 mb-5">
          <h1>¡Te damos la bienvenida a MercadoLibros Chile!</h1>
          <h3>Crea tu cuenta y empieza a vender o comprar libros a miles de personas.</h3>
        </div>
        <form onSubmit={handleSubmit}>
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
          <Button 
            variant="secondary" 
            type="submit" 
            className="w-100 rounded-5 fw-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ?<Spinner animation="border" variant="light" /> : "Crear cuenta"}
          </Button>

          <hr></hr>
            {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}
          <div className="goLogin mt-3">
            <p>
              ¿Ya tienes cuenta? <NavLink to="/login" className="text-primary">inicia tu sesión</NavLink>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
export default Registro;
