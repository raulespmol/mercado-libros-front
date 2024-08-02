import { Button, Container } from "react-bootstrap"
import './Hero.css'
import { useNavigate } from "react-router-dom"


const Hero = () => {
  const navigate = useNavigate()

  return (
    <Container fluid className="py-5" id="hero">
      <Container className="textHero">
        <h5>¡Dale una segunda vida a esos tesoros literarios!</h5>
        <h1>MercadoLibros</h1>
        <Button 
          className="button text-primary fw-normal rounded-1 px-4 py-2"
          variant="light" 
          size="md"
          onClick={() => navigate('/libros')}
        >
          Comprar ahora
        </Button>
      </Container>
    </Container>
  )
}

export default Hero