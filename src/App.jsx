//Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Routes, Route } from 'react-router-dom'

//Views
import Home from "./views/Home"
import Registro from "./views/Registro/Registro"
import Login from "./views/Login"
import Tienda from "./views/Tienda"
import DetallePublicacion from "./views/DetallePublicacion"
import Carrito from "./views/Carrito"
import NotFound from "./views/NotFound"
import CrearPublicacion from "./views/CrearPublicacion"
import MiPerfil from "./views/MiPerfil"
import MisPublicaciones from "./views/MisPublicaciones"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/libros" element={<Tienda />} />
          <Route path="/libros/:id" element={<DetallePublicacion />} />
          <Route path="/libros/nuevo" element={<CrearPublicacion />} />
          <Route path="/perfil" element={<MiPerfil />} />
          <Route path="/perfil/publicaciones" element={<MisPublicaciones />}  />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
