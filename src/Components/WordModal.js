import React from 'react';
import {Modal, Button, Table} from 'react-bootstrap';
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

const MakeBody = (word) => {
    switch (word.wordType) {
        case 'definite article' : return mfnBody(word);
        case 'adjective' : return mfnBody(word);
        case 'noun' : return nounBody(word);
        case 'verb' : return verbBody(word);
        case 'occurs more than once in list' : return "I don't know what to show you!"
        case "I can't find that word" : return "How did this word get on the known word list?"
        default : return "This is a type of word I've never seen before!"
    }
}

const verbBody = (word) => {
    return (
        <div>
            <h3>infinitive: {word.infinitive}</h3>
            <Table striped bordered hover responsive>
              <thead>
                  <tr>
                      <th>tense</th>
                      <th>Ja</th>
                      <th>Ty</th>
                      <th>On/Ona/Ono</th>
                      <th>My</th>
                      <th>Vy</th>
                      <th>Oni</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Present</td>
                      <td>{word.presentForeign[0]}</td>
                      <td>{word.presentForeign[1]}</td>
                      <td>{word.presentForeign[2]}</td>
                      <td>{word.presentForeign[3]}</td>
                      <td>{word.presentForeign[4]}</td>
                      <td>{word.presentForeign[5]}</td>
                  </tr>
              </tbody>
            </Table>
        </div>
    )
}

const nounBody = (word) => {
    var wordAndGender = word.foreign + ' (' + word.gender[0] + ')';
    return <h3>{wordAndGender}</h3>
}

const mfnBody = (word) => {
    var m = word.foreign.male ? word.foreign.male : '---';
    var f = word.foreign.female ? word.foreign.female : '---';
    var n = word.foreign.neuter ? word.foreign.neuter : '---';

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Neuter</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{m}</td>
                    <td>{f}</td>
                    <td>{n}</td>
                </tr>
            </tbody>
        </Table>
    )

}

const WordModal = (props) => {
    var word2Modal = FindWord(props.word, props.wList);
    var modalBody = MakeBody(word2Modal)
    return (
        <Modal show={props.show} onHide={props.onHide} centered >
          <Modal.Header closeButton>
            <Modal.Title>{word2Modal.english} -- {word2Modal.wordType}</Modal.Title>
          </Modal.Header>
          <Modal.Body><p>{props.wList.foreignLang + ' uses:'}</p>{modalBody}</Modal.Body>
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