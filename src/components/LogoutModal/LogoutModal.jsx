import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LogoutModal = ({show, handleClose, logout }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cerrar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro que deseas cerrar tu sesión?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={logout}>
          Cerrar sesión
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LogoutModal