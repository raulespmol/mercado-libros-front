import { useContext, useState } from "react";
import { Badge, Button, Card, CardGroup, Modal, Image, Stack, Spinner } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { CarritoContext } from "../../context/Carrito";
import { FavoritosContext } from "../../context/FavoritosContext";
import placeholder from "../../assets/img/placeholder.jpg";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.jpg";
import datosFormateados from "../../helpers/formateosGeneral";
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
  const perteneceUsuarioLogeado = !preview && usuario && libro.usuario_id === usuario.usuario_id

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

  return (
    <CardGroup className="w-100 d-flex flex-row card-detalle">
      <Card className="d-flex flex-row">
        <Image
          src={
            preview ? nuevoLibro.url_imagen || placeholder : libro.url_imagen
          }
          className="rounded-left portada-libro"
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <h2>{!preview ? libro.titulo //desde Tienda muestra libro.titulo
              : nuevoLibro.titulo ? nuevoLibro.titulo : "Titulo" //desde CrearPublicacion muestra el titulo ingresado, o "Titulo" si esta vacio
              } 
              </h2>
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

          <p className="mb-0">{!preview ? libro.autor //desde Tienda muestra el autor
            : nuevoLibro.autor ? nuevoLibro.autor : "Autor" //autor ingresado, o "Autor" si esta vacio
          }</p>
          <hr />
          <p>{!preview ? libro.descripcion //desde Tienda muestra descripcion
            : nuevoLibro.descripcion ? nuevoLibro.descripcion : "Descripción" //descripcion ingresada, o "Descripcion" si esta vacio
          }</p>

          <Stack direction="horizontal" gap={2}>
            <Badge bg="dark">
              <i className="fa-solid fa-tag me-1"></i>
              {!preview ? libro.genero 
              : nuevoLibro.genero ? nuevoLibro.genero : "Genero"}
            </Badge>

            <Badge bg="dark">
              <i className="fa-solid fa-calendar me-1"></i>
              {!preview ? libro.anio 
              : nuevoLibro.anio ? nuevoLibro.anio : "Año"}
            </Badge>

            <Badge bg="dark">
              <i className="fa-solid fa-book-open me-1"></i>
              {!preview ? libro.editorial 
              : nuevoLibro.editorial ? nuevoLibro.editorial : "Editorial"}
            </Badge>
          </Stack>

          <hr />

          <div className="d-flex flex-row justify-content-start align-items-center">
            <img 
             src={preview ? (usuario?.imagen || avatarPlaceholder) 
              : libro.avatar_usuario ? libro.avatar_usuario : avatarPlaceholder}
             alt="Avatar"
             className="avatar rounded-pill me-2"
            />
            <div>
              <span className="text-muted m-0">publicado por</span>
              <p className="usuario fs-5 m-0">
                {preview ? usuario?.nombre : libro.usuario}
              </p>
            </div>
          </div>

          <hr />

          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="precio fs-3 m-0">
              {!preview ? datosFormateados.formatoCLP(libro.precio)
              : nuevoLibro.precio ? datosFormateados.formatoCLP(Number(nuevoLibro.precio)) : "$0"}
            </span>

            <div className="d-flex gap-2 flex-row ">
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
                variant="primary" 
                disabled={preview || perteneceUsuarioLogeado}
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
