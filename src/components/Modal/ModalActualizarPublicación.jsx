import Modal from "react-bootstrap/Modal";
import FormActualizarPublicacion from "../FormActualizarPublicacion";

function ModalActualizarPublicacion({ show, libro, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Actualizar Publicación</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <FormActualizarPublicacion libro={libro} onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalActualizarPublicacion;
