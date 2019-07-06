import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MakeWordModal = (word, wordList) => {
    console.log('need a modal for', word);

    if (word === wordList.defArticle.english) {
        var message = 'Definite article' + wordList.defArticle.foreign;
    }
    console.log(message);    
}

const WordModal = (props) => {
    MakeWordModal(props.word, props.wList);
    return (
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" disabled>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export const doNotShow = <Modal show={false} />

export default WordModal