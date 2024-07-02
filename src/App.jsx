//Components
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'

//Views
import Home from "./views/Home"
import NotFound from "./views/NotFound"


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
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
