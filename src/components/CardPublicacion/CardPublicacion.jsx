import React from 'react';
import { Card } from 'react-bootstrap'; 
import './style.css';
import placeholder from "../../assets/img/placeholder.jpg"

const CardPublicacion = () => {
  const exampleData = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/200",
      title: "Título del Libro 1",
      author: "Nombre del Autor 1",
      price: "9.999"
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/200",
      title: "Título del Libro 2",
      author: "Nombre del Autor 2",
      price: "14.999"
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/200",
      title: "Título del Libro 3",
      author: "Nombre del Autor 3",
      price: "19.999"
    }
  ];

  const cardStyle = {
    width: '18rem',
    height: '18rem', 
  };
  
  const imgStyle = {
    height: '10rem', 
    objectFit: 'cover', 
  };

  return (
    <div className="d-flex justify-content-around flex-wrap">
      {exampleData.map((item) => (
        <Card key={item.id} style={cardStyle} className="m-2">
          <Card.Img variant="top" src={placeholder} alt={item.title} style={imgStyle} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.author}</Card.Text>
              </div>
              <div className="font-weight-bold">${item.price}</div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default CardPublicacion;
