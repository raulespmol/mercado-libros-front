import { useParams } from 'react-router-dom';
import CardDetalle from '../components/CardDetalle/CardDetalle';
import { Container } from 'react-bootstrap';

const DetallePublicacion = () => {
  const { id } = useParams()

  return (
    <Container>
      <CardDetalle id={id}/>
    </Container>
  )
}

export default DetallePublicacion