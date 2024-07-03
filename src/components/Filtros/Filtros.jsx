import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Filtros = () => {
  return (
    <Card className="sidebar">
      <Card.Body className='filtros'>

        <h2 className="mb-4 text-center">Filtros</h2>

        <Form className='w-100  position-sticky top-0'>

          <h3>Géneros</h3>
          <Form.Group className="mb-3">
            {/* Renderizar con .map() los generos traidos desde la API */}
            <Form.Check
              type="checkbox"
              label="Ficción"
            />
            <Form.Check
              type="checkbox"
              label="Terror"
            />
            <Form.Check
              type="checkbox"
              label="Fantasía"
            />
            <Form.Check
              type="checkbox"
              label="Misterio"
            />
            <Form.Check
              type="checkbox"
              label="Romance"
            />
          </Form.Group>

          <h3>Ordenar por:</h3>
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Precio menor a mayor</option>
              <option>Precio mayor a menor</option>
              <option>Año más reciente</option>
              <option>Año más antiguo</option>
            </Form.Select>
          </Form.Group>
          
          <h3>Precio</h3>
          <Form.Group>
            <Form.Label htmlFor="precio-min">mínimo</Form.Label>
            <Form.Control id="precio-min" placeholder="$0" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="precio-max">máximo</Form.Label>
            <Form.Control id="precio-max" placeholder="$100.000" />
          </Form.Group>

          <Button 
            variant="dark"
            className='w-100'
          >
            Aplicar
          </Button>
        </Form>

      </Card.Body>
    </Card>
  )
}

export default Filtros