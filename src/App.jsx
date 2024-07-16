//Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Vistas
import {
  Carrito,
  DetallePublicacion,
  Home,
  LoginPage,
  NotFound,
  Registro,
  Tienda,
} from "./views";

//Rutas
import PrivateRoutes from "./router/PrivateRoutes";
import ProtectRoutes from "./router/ProtectRoutes";

//Context
import AppProvider from "./context/AppProvider";

//Estilos
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/libros" element={<Tienda />} />
          <Route path="/libros/libro/:id" element={<DetallePublicacion />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route
            path="/*"
            element={
              <ProtectRoutes>
                <PrivateRoutes />
              </ProtectRoutes>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
