import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const  DeleteModal = (props) => {
    return (
      <Modal show={props.showDeleteModal}>
          <Modal.Body>Are you sure you want to delete this text?</Modal.Body>
          <Modal.Footer>
              <Button variant='info' onClick={props.hideDeleteModal}>Cancel</Button>
              <Button variant='danger' onClick={props.deleteFromCatalogue}>Delete</Button>
          </Modal.Footer>
      </Modal>
    )
} 

export default DeleteModal;