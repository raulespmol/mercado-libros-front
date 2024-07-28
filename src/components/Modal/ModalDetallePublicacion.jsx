import Modal from 'react-bootstrap/Modal';
import CardDetalle from '../CardDetalle/CardDetalle';

function ModalDetalle({show, libro, onHide}) {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <CardDetalle libro={libro}/>
      </Modal>
    );
  }

  export default ModalDetalle;