import placeholder from "../assets/img/placeholder.jpg"

const MisDatos = () => {
  const imgStyle = {
    height: "128px",
    width: "128px",
    borderRadius: "50%"
  }

  return (
    <div>
      <h2>Bienvenido Usuario</h2>
      <div className="d-flex">
        <img src={placeholder} style={imgStyle}/>
        <div>
          <h5 className="fw-semibold">Datos Personales</h5>
          <p className="m-0">Nombre</p> 
          <input type="text" /> {/* Cambiar por Bootstrap */}
          <p className="m-0">Apellido</p> 
          <input type="text" /> {/* Cambiar por Bootstrap */}
        </div>
      </div>
    </div>
  )
}

export default MisDatos