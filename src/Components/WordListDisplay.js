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
        x.toLowerCase().indexOf(props.searchFor.toLowerCase())===0 
        : x.toLowerCase().includes(props.searchFor.toLowerCase()))
       .sort().map(x => <span key={x}>{x}<br /></span>);

    if (wordList.length === 0) {
        var dictionaryLink = 'https://en.bab.la/dictionary/english-czech/'+props.searchFor;
        var dictionaryJSX = <p>Try a <a 
            href={dictionaryLink} target="_blank" rel="noopener noreferrer" >dictionary</a></p>; 
    } 
    
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
                     { dictionaryJSX }
                  </Col>
                  <Col>
                     <div id="wordList"><p>{wordList}</p></div>
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WordListDisplay;