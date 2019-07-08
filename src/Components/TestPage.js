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
  var markedAns = props.userAns === '' ? <span>I'll mark your answer here</span> 
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
        <Button variant='primary' onClick={props.switchModeClick}>Translate the other way</Button>
        </Form>
        <p></p>
        <div id='answer'>{markedAns}</div>
        <p>If your translation matches what I'm thinking of, then your words will be green. 
          If a word is red, then that is not what I am thinking of. <br />
          If you get the complete sentence, I will reward you with a new question!</p>
      </div>
  )
}

export default TestPage;