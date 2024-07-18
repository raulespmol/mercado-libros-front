import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";
import { Badge, Button, Card, CardGroup, Image, Stack } from "react-bootstrap";
import "./style.css";
import placeholder from "../../assets/img/placeholder.jpg";
import { UserContext } from "../../context/UserContext";

const CardDetalle = ({ preview = false, libro, nuevoLibro }) => {
  //prop preview se usará:
  //True: desde la vista CrearPublicacion /libros/nuevo | usa el objeto 'nuevoLibro'
  //False: vista DetallePublicacion /libros/libro/:id | usa el objeto 'libro'
  const { usuario } = useContext(UserContext)

  return (
    <CardGroup className="w-100 d-flex flex-row">
      <Card className="d-flex flex-row">
        <Image
          src={
            preview ? nuevoLibro.url_imagen || placeholder : libro.url_imagen
          }
          className="rounded-left"
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <h2>{preview ? nuevoLibro.titulo : libro.titulo}</h2>
            </div>
            <div>
              {!preview && 
              <Modal.Header
                closeButton
                className="border-bottom-0"
              ></Modal.Header>
            }
            </div>
          </div>

          <p className="mb-3">{preview ? nuevoLibro.autor : libro.autor}</p>
          <hr />
          <p>{preview ? nuevoLibro.descripcion : libro.descripcion}</p>

          <Stack direction="horizontal" gap={2}>
            <Badge bg="secondary">
              {preview ? nuevoLibro.genero : libro.genero}
            </Badge>

            <Badge bg="secondary">
              {preview ? nuevoLibro.editorial : libro.editorial}
            </Badge>

            <Badge bg="secondary">
              {preview ? nuevoLibro.anio : libro.anio}
            </Badge>
          </Stack>

          <hr />

          <span>publicado por</span>
          <p className="usuario">
            {preview ? usuario?.nombre : libro.usuario}
          </p>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <span className="precio">
              {preview ? `$ ${nuevoLibro.precio}` : libro.precio}
            </span>

            <div className="d-flex gap-2">
              <Button variant="warning" disabled={preview}>
                + Favoritos
              </Button>
              <Button variant="success" disabled={preview}>
                + Carrito
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardDetalle;
