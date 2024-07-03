import { Button, Container } from "react-bootstrap"
import './Hero.css'
import { useNavigate } from "react-router-dom"


const Hero = () => {
  const navigate = useNavigate()

  return (
    <Container fluid className="py-5" id="hero">
      <Container>
        <p className="m-0">¡Dale una segunda vida a esos tesoros literarios!</p>
        <h1>MercadoLibros</h1>
        <Button 
          variant="dark" 
          size="lg"
          onClick={() => navigate('/libros')}
        >
          Tienda
        </Button>
      </Container>
    </Container>
  )
}

export default Hero