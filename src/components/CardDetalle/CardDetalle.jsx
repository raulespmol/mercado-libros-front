import { useContext, useEffect, useState } from "react";
import { Badge, Button, Card, CardGroup, Modal, Image, Stack, Spinner } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { CarritoContext } from "../../context/Carrito";
import { FavoritosContext } from "../../context/FavoritosContext";
import placeholder from "../../assets/img/placeholder.jpg";
import "./style.css";

const CardDetalle = ({ preview = false, libro, nuevoLibro }) => {
  //prop preview se usará:
  //True: desde la vista CrearPublicacion /libros/nuevo | usa el objeto 'nuevoLibro'
  //False: vista desde Modal | usa el objeto 'libro'
  const { usuario } = useContext(UserContext)
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CarritoContext)
  const { favoritos, toggleFavorito } = useContext(FavoritosContext)

  const estaEnCarrito = !preview && carrito.some(item => item.libro_id === libro.libro_id)
  const estaEnFavoritos = !preview && favoritos.some(item => item.libro_id === libro.libro_id)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCarrito = (libro) => {
    if(estaEnCarrito){
      eliminarDelCarrito(libro.libro_id)
    } else {
      agregarAlCarrito(libro)
    }
  }

  const handleFavorito = async (usuario, libro) => {
    setIsSubmitting(true)
    try {
      await toggleFavorito(usuario, libro, estaEnFavoritos ? "remove" : "add")
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 400);
    }
  }

  useEffect(() => {
    console.log(isSubmitting)
  }, [isSubmitting])

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
              {preview ? ( "$" + nuevoLibro.precio)  : ( "$" + libro.precio )}
            </span>

            <div className="d-flex gap-2">
              <Button 
                className="text-light"
                variant="warning" 
                disabled={preview || isSubmitting}
                onClick={() => handleFavorito(usuario.usuario_id, libro.libro_id)}
              >
                {isSubmitting
                ? <Spinner animation="border" size="sm" />
                : estaEnFavoritos
                ? ( <i className="fa-solid fa-bookmark"></i> )
                : ( <i className="fa-regular fa-bookmark"></i> )
                }
              </Button>

              <Button 
                variant="success" 
                disabled={preview}
                onClick={() => handleCarrito(libro)}
              >
                {estaEnCarrito
                ? ( <i className="fa-solid fa-check me-1"></i> )
                : ( <i className="fa-solid fa-cart-plus me-1"></i> )
                }
                Carrito
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardDetalle;
