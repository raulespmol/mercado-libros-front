//Components
import { Routes, Route } from "react-router-dom";

//Views
import {
  CrearPublicacion,
  Perfil,
  MisPublicaciones,
  Favoritos,
  MisDatos
} from "../views";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/libros/nuevo" element={<CrearPublicacion />} />
      <Route path="/perfil" element={<Perfil />}>
        <Route index element={<MisDatos />} />
        <Route path="publicaciones" element={<MisPublicaciones />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
