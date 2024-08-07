import Carousel from 'react-bootstrap/Carousel';
import './SectionFeatures.css'; 

function SectionFeatures() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books and Reading"
          />
          <Carousel.Caption>
            <h3 className="text-primary">Compra o Vende</h3>
            <p className="text-dark">Consigue libros de segunda mano a precios increíbles, o vende los que ya has leído</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
          />
          <Carousel.Caption>
            <h3 className="text-primary">Compras Protegidas</h3>
            <p className="text-dark">Tus compras se realizan a traves de una pasarela de pagos segura y confiable</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SectionFeatures;
