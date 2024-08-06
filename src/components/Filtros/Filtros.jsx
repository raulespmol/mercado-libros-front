import { Card, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LibrosContext } from "../../context/LibrosContext";

const Filtros = ({ filtros, setFiltros, filtrosInitialState }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { generos } = useContext(LibrosContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFiltros({
      ...filtros,
      generos: checked
        ? [...filtros.generos, value]
        : filtros.generos.filter((g) => g != value),
    });
  };

  const resetFilter = () => {
    setFiltros(filtrosInitialState);
  };

  return (
    <Card className="pt-3 px-2 bg-light rounded-0 sidebar">
      <Card.Body className="d-flex flex-column align-items-center">
        <h2 className="mb-2 text-center">Filtros</h2>

        <Form className="w-100 pt-3 position-sticky top-0 d-none d-md-block">
          <Form.Group>
            <Form.Control
              id="buscador"
              placeholder="Buscar por título o autor..."
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleChange}
            />
          </Form.Group>

          <h3>Géneros</h3>
          <Form.Group className="mb-3">
            {generos.map((g) => (
              <Form.Check
                type="checkbox"
                key={g.genero_id}
                id={g.nombre}
                label={g.nombre}
                value={g.nombre}
                checked={filtros.generos.includes(g.nombre)}
                onChange={handleCheckbox}
              />
            ))}
          </Form.Group>

          <h3>Ordenar por:</h3>
          <Form.Group className="mb-3">
            <Form.Select defaultValue="" onChange={handleChange} name="orden">
              <option value="" disabled>
                Selecciona un Orden
              </option>
              <option value="precioAsc">Precio menor a mayor</option>
              <option value="precioDesc">Precio mayor a menor</option>
              <option value="anioDesc">Año más reciente</option>
              <option value="anioAsc">Año más antiguo</option>
            </Form.Select>
          </Form.Group>

          <h3>Precio</h3>
          <Form.Group>
            <Form.Label htmlFor="precio-min">mínimo</Form.Label>
            <Form.Control
              type="number"
              min={0}
              id="precio-min"
              placeholder="$0"
              name="precioMin"
              value={filtros.precioMin}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="precio-max">máximo</Form.Label>
            <Form.Control
              type="number"
              min={0}
              id="precio-max"
              placeholder="$100.000"
              name="precioMax"
              value={filtros.precioMax}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="outline-dark"
            className="w-100"
            onClick={resetFilter}
          >
            Limpiar Filtros
          </Button>
        </Form>
        <div className="w-100 d-flex justify-content-between p-0 d-md-none d-block">
          <Form.Group>
            <Form.Select
              defaultValue=""
              onChange={handleChange}
              name="orden"
              className="rounded-3"
              style={{ width: "150px" }}
              size="sm"
            >
              <option value="" disabled>
                Ordenar por
              </option>
              <option value="precioAsc">Precio menor a mayor</option>
              <option value="precioDesc">Precio mayor a menor</option>
              <option value="anioDesc">Año más reciente</option>
              <option value="anioAsc">Año más antiguo</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-3 d-flex justify-content-between"
            style={{ width: "150px", height: "31px" }}
            onClick={handleShow}
          >
            <span>Filtrar por</span>
            <i
              className="fa-solid fa-angle-down"
              style={{ margin: "auto 8px" }}
            ></i>
          </Button>
        </div>

        <Offcanvas
          show={show}
          onHide={handleClose}
          className="w-75 bg-light"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtros</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  id="buscador"
                  placeholder="Buscar por título o autor..."
                  name="busqueda"
                  value={filtros.busqueda}
                  onChange={handleChange}
                />
              </Form.Group>

              <h3>Géneros</h3>
              <Form.Group className="d-flex flex-wrap gap-2 mb-3">
                {generos.map((g) => (
                  <Form.Check
                    type="checkbox"
                    key={g.genero_id}
                    id={g.nombre}
                    label={g.nombre}
                    value={g.nombre}
                    checked={filtros.generos.includes(g.nombre)}
                    onChange={handleCheckbox}
                  />
                ))}
              </Form.Group>
              <h3>Precio</h3>
              <div className="d-flex justify-content-evenly gap-3">
                <Form.Group>
                  <Form.Label htmlFor="precio-min">mínimo</Form.Label>
                  <Form.Control
                    id="precio-min"
                    placeholder="$0"
                    name="precioMin"
                    value={filtros.precioMin}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="precio-max">máximo</Form.Label>
                  <Form.Control
                    id="precio-max"
                    placeholder="$100.000"
                    name="precioMax"
                    value={filtros.precioMax}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <Form.Group >
                <Button onClick={handleClose} className="w-100 mb-3">
                  Aceptar
                </Button>
                <Button variant="outline-dark" className="w-100" onClick={resetFilter}>
                  Limpiar Filtros
                </Button>
              </Form.Group>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Card.Body>
    </Card>
  );
};

export default Filtros;
