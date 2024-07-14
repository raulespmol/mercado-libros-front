//Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import {
  Home,
  Registro,
  LoginPage,
  Tienda,
  DetallePublicacion,
  Carrito,
  NotFound,
  CrearPublicacion,
  Perfil,
  MisPublicaciones,
  Favoritos,
  MisDatos
} from "../views";

function RouterLinks() {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/libros" element={<Tienda />} />
          <Route path="/libros/:id" element={<DetallePublicacion />} />
          <Route path="/libros/nuevo" element={<CrearPublicacion />} />

          <Route path="/perfil" element={<Perfil />}>
            <Route index element={<MisDatos />} />
            <Route path="publicaciones" element={<MisPublicaciones />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Route>

          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

  );
}

export default RouterLinks;
