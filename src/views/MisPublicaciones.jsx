import React, {useContext} from 'react'
import { LibrosContext } from '../context/LibrosContext'
import CardMisPublicaciones from "../components/CardMisPublicaciones/CardMisPublicaciones";
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const MisPublicaciones = () => {
  
  const { librosUser } = useContext(LibrosContext)

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1>Mis publicaciones</h1>
      <Container>
        <Row className="mt-5">
          {librosUser.length > 0
          ? librosUser.map((libro) => (
              <Col key={libro.libro_id} sm={6} md={4} lg={4} className="mb-4">
                <CardMisPublicaciones libro={libro}/>
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