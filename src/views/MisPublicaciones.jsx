import React, {useContext} from 'react'
import { LibrosContext } from '../context/LibrosContext'
import CardMisPublicaciones from "../components/CardMisPublicaciones/CardMisPublicaciones";
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const MisPublicaciones = () => {
  
  const { librosUser } = useContext(LibrosContext)

  return (
    <Container fluid className="d-flex flex-column align-items-center p-sm-2 p-md-3 p-lg-4 p-xl-5">
      <h1 className='mt-5 mt-md-3'>Mis publicaciones</h1>
      <Container>
        <Row className="mt-5">
          {librosUser.length > 0
          ? librosUser.map((libro) => (
              <Col key={libro.libro_id} md={12} lg={6} className="mb-4">
                <CardMisPublicaciones libro={libro}/>
              </Col>
            ))
          : <p className="text-center">
              Aún no tienes libros publicados. Te invitamos a crear tu primera publicacion <NavLink to="/libros/nuevo">aquí</NavLink>
            </p>
          }
        </Row>
      </Container>
    </Container>
  );
}


export default MisPublicaciones