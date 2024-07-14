export const validateNuevoUsuario = (usuario, setAlert) => {
  const {nombre, email, password, confirmarPassword} = usuario

  if(nombre === '' ||email === '' ||password === '' || confirmarPassword === ''){
    setAlert({msg: 'Completa todos los campos', color: 'danger'})
    return
  }

  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if(!email.match(mailRegex)){
    setAlert({msg: 'Formato de correo inválido', color: 'danger'})
    return
  }

  if(password.length < 4){
    setAlert({msg: 'Contraseña demasiado corta', color: 'danger'})
    return
  }

  if(password != confirmarPassword){
    setAlert({msg: 'Las contraseñas no coinciden', color: 'danger'})
    return
  }

  return true
}