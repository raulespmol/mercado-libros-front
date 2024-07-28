import Modal from "react-bootstrap/Modal";
import FormActualizarPublicacion from "../FormActualizarPublicacion";

function ModalActualizarPublicacion({ show, libro, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Publicación</Modal.Title>
      </Modal.Header>
      <FormActualizarPublicacion libro={libro} onHide={onHide} />
    </Modal>
  );
}

export default ModalActualizarPublicacion;
