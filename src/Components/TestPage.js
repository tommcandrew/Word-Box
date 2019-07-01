import React from 'react';
import './TestPage.css';
import {Button, Form} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const TestPage = (props) => {  
    
  if (props.transMode === 'fromEng') {
      var questionSentence = props.testQ.english;
      var answerSentence = props.testQ.foreign;
      var placeHolderText = 'Provide the '+props.language+' translation';
    } else {
        questionSentence = props.testQ.foreign;
        answerSentence = props.testQ.english;
        placeHolderText = 'Provide the English translation';
  }   

  var answerWords = answerSentence.toLowerCase().split(' ');
  var markedAns = props.userAns === '' ? <span>Give an Answer</span> 
      : props.userAns.split(' ').map((x, i) => {
        if (x.toLowerCase() === answerWords[i]) {
            return <span className='goodWord' key={i}>{x+' '}</span>
        }
        return <span className='badWord' key={i}>{x+' '}</span>
        })

  
  return (
      <div id='testpage'>
        <h2>Translate the following</h2>
        <p id='question'>{questionSentence}</p>
        <Form>
          <Form.Group>
            <Form.Control 
              type='text' 
              placeholder={placeHolderText}
              value={props.userAns} 
              onChange={props.changeAns} />
          </Form.Group>
        </Form>
        <div id='answer'>{markedAns}</div>
        <Button variant='primary' onClick={props.switchModeClick}>Translate the other way</Button>
      </div>
  )
}

export default TestPage;