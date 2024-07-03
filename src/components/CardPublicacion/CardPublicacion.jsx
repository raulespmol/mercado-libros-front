import React from 'react';
import { Card } from 'react-bootstrap'; // Asumiendo que estás usando React Bootstrap
import './style.css';

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

  return (
    <div className="d-flex justify-content-around">
      {exampleData.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
          <Card.Body className="d-flex">
            <div className="flex-grow-1">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-muted">{item.author}</Card.Text>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <div className="font-weight-bold">${item.price}</div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPublicacion;
