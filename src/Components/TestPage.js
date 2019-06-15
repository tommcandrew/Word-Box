import React from 'react';
import './TestPage.css'

const TestPage = (props) => {  
    
  if (props.transMode === 'fromEng') {
      var questionSentence = props.testQ.english;
      var answerSentence = props.testQ.foreign;
      var buttonRole = 'Switch to translating INTO English';
    } else {
        questionSentence = props.testQ.foreign;
        answerSentence = props.testQ.english;
        buttonRole = 'Switch to translating FROM English';
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
        <div id='answer'>{markedAns}</div>
        <input type='text' value={props.userAns} onChange={props.changeAns} />
        <button onClick={props.switchModeClick}>{buttonRole}</button>
      </div>
  )
}

export default TestPage;