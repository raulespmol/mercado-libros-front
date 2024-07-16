//Components
import UserProvider from "./context/UserProvider";
import { SearchProvider } from "./context/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  Carrito,
  DetallePublicacion,
  Home,
  LoginPage,
  NotFound,
  Registro,
  Tienda,
} from "./views";

//Estilos
import "./App.css";
import PrivateRoutes from "./router/PrivateRoutes";
import ProtectRoutes from "./router/ProtectRoutes";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <SearchProvider>
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
        </SearchProvider>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
