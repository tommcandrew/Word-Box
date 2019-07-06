import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FindWord = (word, wordList) => {
// the wordType property has been added to vocab, so that all words can be put in one list
    var allWords = wordList.nouns
                        .concat(wordList.verbs, wordList.adjectives, wordList.defArticle)
                        .filter(x=>x.english===word);
// if that list contains only one word matching the given word, return that word
// otherwise return an error
    if (allWords.length === 1) {
        return allWords[0]
    } else {
        if (allWords.length > 1) {
            return {english:word, wordType:"occurs more than once in list"}
        }
    }
// the word wasn't found in known words, so how did it get into the list on the knowWords tab?
    return {english:'??'+word+'??', wordType:"I can't find that word"}
}

const WordModal = (props) => {
    var word2Modal = FindWord(props.word, props.wList);
    console.log(word2Modal);
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
          <Modal.Header closeButton>
            <Modal.Title>{word2Modal.english} -- {word2Modal.wordType}</Modal.Title>
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