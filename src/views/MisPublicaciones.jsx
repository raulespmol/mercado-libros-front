import React, {useContext} from 'react'
import { LibrosContext } from '../context/LibrosContext'
import CardTienda from "../components/CardTienda/CardTienda";
import '../components/CardPublicacion/style.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const MisPublicaciones = () => {

  const { libros } = useContext(LibrosContext)

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1>Mis publicaciones</h1>
      <Container>
        <Row className="mt-5">
          {libros.length > 0
          ? libros.map((libro) => (
              <Col key={libro.libro_id} sm={6} md={4} lg={3} className="mb-4">
                <CardTienda libro={libro} />
              </Col>
            ))
          : <Spinner />
          }
        </Row>
      </Container>
    </Container>
  );
}


export default MisPublicaciones