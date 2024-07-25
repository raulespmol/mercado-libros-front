import Carousel from 'react-bootstrap/Carousel';
import './SectionFeatures.css'; 

function SectionFeatures() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books and Reading"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SectionFeatures;
