import React, { useContext, useState } from 'react';
import { Form, Button, Card, Spinner } from 'react-bootstrap';
import { LibrosContext } from '../../context/LibrosContext';
import { UserContext } from '../../context/UserContext';
import datosFormateados from '../../helpers/formateosGeneral';
import './style.css';
import ModalMensaje from '../Modal/ModalMensaje';

const FormPublicacion = ({nuevoLibro, setNuevoLibro}) => {
  const { usuario } = useContext(UserContext)
  const { generos, postLibro } = useContext(LibrosContext)

  const [isSubmitting, setIsSubmitting] = useState(false)

  //Estados para modal
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("")

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
        setMessage(response.msg);
        setModalShow(true)
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
    <Card className="text-center sidebar rounded-0 p-5 p-md-0">
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

          <Form.Group controlId="formAnio">
            <Form.Select 
              defaultValue=""
              onChange={handleLibro}
              name="anio"
            >
              <option disabled value="">Selecciona un año</option>
              {datosFormateados.selectAnios().map(year => 
                <option 
                  value={year}
                  key={year}
                >
                  {year}
                </option>
              )}
            </Form.Select>
          </Form.Group>

          {/* <Form.Group controlId="formAno">
            <Form.Control 
              type="text"
              placeholder="Año"
              value={nuevoLibro.anio}   
              onChange={handleLibro}
              name="anio"
          />
          </Form.Group> */}

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
              type="number"
              min={0}
              placeholder="Precio"
              value={nuevoLibro.precio}    
              onChange={handleLibro}
              name="precio"
        />
          </Form.Group>

          <Form.Group controlId="formResena">
            <Form.Control 
              as="textarea"
              maxLength={250}
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

      
      <ModalMensaje
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={message}
      />
    </Card>
  );
}

export default FormPublicacion;
