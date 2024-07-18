import React, { useContext, useState } from 'react';
import { Form, Button, Card, Spinner } from 'react-bootstrap';
import { LibrosContext } from '../../context/LibrosContext';
import { UserContext } from '../../context/UserContext';
import './style.css';

const FormPublicacion = ({nuevoLibro, setNuevoLibro}) => {
  const { usuario } = useContext(UserContext)
  const { generos, postLibro } = useContext(LibrosContext)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLibro = (e) => {
    const {name, value} = e.target

    setNuevoLibro({
      usuario: usuario.usuario_id,
      ...nuevoLibro, 
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await postLibro(nuevoLibro);
      if(response.data){
        console.log(response.msg); //Mostrar en un componente Alert
        setNuevoLibro({
          titulo: "",
          autor: "",
          editorial: "",
          anio: "",
          genero: "",
          url_imagen: "",
          precio: "",
          descripcion: ""
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="text-center sidebar">
      <Card.Body className='formulario'>
        <h2 className="mb-4">Crear Publicación</h2>
        <Form className='w-100' onSubmit={handleSubmit}>
          <Form.Group controlId="formTitulo">
            <Form.Control 
              type="text"
              placeholder="Título"
              value={nuevoLibro.titulo}
              onChange={handleLibro}
              name="titulo"
          />
          </Form.Group>

          <Form.Group controlId="formAutor">
            <Form.Control 
              type="text"
              placeholder="Autor"
              value={nuevoLibro.autor}
              onChange={handleLibro}
              name="autor"
          />
          </Form.Group>

          <Form.Group controlId="formEditorial">
            <Form.Control 
              type="text"
              placeholder="Editorial"
              value={nuevoLibro.editorial}  
              onChange={handleLibro}
              name="editorial"
          />
          </Form.Group>

          <Form.Group controlId="formAno">
            <Form.Control 
              type="text"
              placeholder="Año"
              value={nuevoLibro.anio}   
              onChange={handleLibro}
              name="anio"
          />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Select 
              defaultValue=""
              onChange={handleLibro}
              name="genero"
            >

              <option disabled value="">Selecciona un genero</option>
              {generos.map(g => 
                <option 
                  value={g.genero_id}
                  key={g.genero_id}
                >
                  {g.nombre}
                </option>
              )}

            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formURLPortada">
            <Form.Control 
              type="text"
              placeholder="URL Portada / Imagen"
              value={nuevoLibro.url_imagen}
              onChange={handleLibro}
              name="url_imagen"
            />
          </Form.Group>

          <Form.Group controlId="formPrecio">
            <Form.Control 
              type="text"
              placeholder="Precio"
              value={nuevoLibro.precio}    
              onChange={handleLibro}
              name="precio"
          />
          </Form.Group>

          <Form.Group controlId="formResena">
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Reseña / Descripción / Detalles"
              value={nuevoLibro.descripcion}
              onChange={handleLibro}
              name="descripcion"
            />
          </Form.Group>

          <Button 
            variant="dark" 
            className='w-100 d-flex justify-content-center align-items-center'
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner animation="border" variant="light" /> : "Publicar"}
          </Button>
        </Form>

      </Card.Body>
    </Card>
  );
}

export default FormPublicacion;
