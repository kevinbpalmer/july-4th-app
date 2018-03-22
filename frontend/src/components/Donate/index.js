import React from 'react'
import { Modal, Button } from 'react-bootstrap'

// stylesheet
import './styles.sass'

const Donate = ({isModalOpen, hideModal}) => (
  <Modal dialogClassName='donate-modal' show={isModalOpen} onHide={hideModal}>
    <Modal.Header closeButton>
      <Modal.Title>Donate Now</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    </Modal.Body>
  </Modal>
)

export default Donate
