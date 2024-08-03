import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalMensaje({show, message, onHide}) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='text-center d-flex flex-column align-content-center'>
          <p>
            {message}
          </p>
          <div>
            <Button variant="outline-dark" onClick={onHide}>
              Aceptar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default ModalMensaje;