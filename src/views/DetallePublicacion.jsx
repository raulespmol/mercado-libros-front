import { useParams } from 'react-router-dom';
import CardDetalle from '../components/CardDetalle/CardDetalle';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DetallePublicacion = () => {
  const [libro, setLibro] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getLibro = async () => {
    try {
      const response = await fetch(`${BASE_URL}/libros/get/${id}`);
      const res = await response.json();
      setLibro(res.data)
    } catch(error) {
      console.error('Error al obtener el libro', error)
    } finally {
      setIsLoading(false)
    }
    
  }

  useEffect(() => {
    getLibro()
  }, [])
  

  return (
    <Container>
      <Row className='pt-3 mb-3 justify-content-center'>
        <Col>
        
          {isLoading
            ? 'Cargando'
            : <CardDetalle libro={libro} />
          }
          
        </Col>
      </Row>
    </Container>
  )
}

export default DetallePublicacion