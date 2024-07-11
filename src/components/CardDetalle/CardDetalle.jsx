import React from 'react'
import { Badge, Button, Card, CardGroup, Col, Image, Row, Stack } from 'react-bootstrap'
import "./style.css"
import placeholder from "../../assets/img/placeholder.jpg"

const CardDetalle = ({preview = false, libro, nuevoLibro}) => {
  //prop preview se usará:
  //True: desde la vista CrearPublicacion /libros/nuevo | usa el objeto 'libro'
  //False: vista DetallePublicacion /libros/:id | usa el objeto 'nuevoLibro'
  return (
    <CardGroup className='w-100 d-flex flex-row'>
      <Card className='d-flex flex-row'>
        <Image
          src={!preview 
              ? libro.url_imagen
              : nuevoLibro.url_imagen
              ? nuevoLibro.url_imagen
              : placeholder 
            }
          rounded
        />

        <Card.Body>
          <h2>
            {!preview
              ? libro.titulo
              : nuevoLibro.titulo 
              ? nuevoLibro.titulo  
              : "Título" //mostrará "Titulo" mientras el input de FormPublicacion esté vacío
            }
          </h2>

          <p className='mb-3'>
            {!preview 
              ? libro.autor
              : nuevoLibro.autor
              ? nuevoLibro.autor
              : "Autor"
            }
          </p>

          <hr />

          <p>
            {!preview 
              ? libro.descripcion
              : nuevoLibro.descripcion
              ? nuevoLibro.descripcion
              : "Descripción"
            }
          </p>

          <Stack direction="horizontal" gap={2}>
            <Badge bg="secondary">
              {!preview
                ? libro.genero
                : "Genero"
              }
            </Badge>
            <Badge bg="secondary">
              {!preview 
                ? libro.editorial
                : nuevoLibro.editorial
                ? nuevoLibro.editorial
                : "Editorial"
              }
            </Badge>
            <Badge bg="secondary">
              {!preview 
                ? libro.anio
                : nuevoLibro.anio
                ? nuevoLibro.anio
                : "Año"
              }
            </Badge>
          </Stack>

          <hr />

          <span>publicado por</span>
          <p className='usuario'>
            {!preview 
              ? libro.usuario
              : "Usuario"
            }
          </p> 

          <hr />

          <div className='d-flex justify-content-between align-items-center'>
            <span className='precio'>
              {!preview 
                ? libro.precio
                : nuevoLibro.precio
                ? nuevoLibro.precio
                : "$0"
              }
            </span>

            <div className='d-flex gap-2'>
              <Button variant='warning' disabled={preview}>+ Favoritos</Button>
              <Button variant='success' disabled={preview}>+ Carrito</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default CardDetalle