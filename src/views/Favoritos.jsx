import { Container, Row, Col } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { LibrosContext } from "../context/LibrosContext";
import { UserContext } from "../context/UserContext";
import { ENDPOINT } from "../utils/constants";
import CardTienda from "../components/CardTienda/CardTienda";

const Favoritos = () => {
  const { token } = useContext(UserContext)
  const { libros } = useContext(LibrosContext)
  
  const [favoritos, setFavoritos] = useState([])

  const fetchFavoritos = async (token) => {
    try {
        const response = await fetch(`${ENDPOINT.favoritos}/get`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const {data} = await response.json();
        
        const librosFavoritos = libros.filter(libro =>
          data.some(fav => fav.libro_id === libro.libro_id)
        );

        setFavoritos(librosFavoritos)

    } catch (error) {
        console.error("Error al obtener favoritos:", error);
    }
  };

  useEffect(() => {
    fetchFavoritos(token)
  }, [])
  

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1>Guardados</h1>
      <Container>
        <Row className="mt-5">
          {favoritos.length > 0
          ? favoritos.map((libro) => (
              <Col key={libro.libro_id} sm={6} md={4} lg={3} className="mb-4">
                <CardTienda libro={libro} />
              </Col>
            ))
          : "Cargando"
          }
        </Row>
      </Container>
    </Container>
  );
};
export default Favoritos;
