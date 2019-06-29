import React from 'react';
import WordListCheckbox from './WordListCheckbox';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const WordListDisplay = (props) =>  {
    var wordList = ['the'];
    if (props.types.includes('Nouns')) {
        for (var i in props.words.nouns) {
            wordList.push(props.words.nouns[i].english)
        }
    }
    if (props.types.includes('Verbs')) {
        for (i in props.words.verbs) {
            wordList.push(props.words.verbs[i].english)
        }
    }
    if (props.types.includes('Adjectives')) {
        for (i in props.words.adjectives) {
            wordList.push(props.words.adjectives[i].english)
        }
    }
    wordList = wordList.filter(x=>props.searchFromStart?
        x.indexOf(props.searchFor)===0 :x.includes(props.searchFor))
       .sort().map(x => <li key={x}>{x}</li>);
    
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                     <WordListCheckbox 
                       selection={props.types} 
                       click={props.changeTypes}
                       changeSearch={props.changeSearch}
                       changeCheckBox={props.changeCheckBox}
                     />
                  </Col>
                  <Col>
                     <div id="wordList"><ul>{wordList}</ul></div>
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WordListDisplay;