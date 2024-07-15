import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Buscador = ({ placeholder, search, handleChange }) => {
  return (
    <>
      <form className="d-flex text-white" role="search">
        <InputGroup>
          <Form.Control
            type="search"
            placeholder={placeholder}
            value={search}
            onChange={handleChange}
            className="form-control-sm border-2 border-success rounded-5"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default Buscador;
