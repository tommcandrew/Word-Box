import React from 'react';
import './TestPage.css'

const rndNoun = (arr) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign}
}

// so far only tense in vocab.js is 'present'
// nb: person is zero-indexed [1stSing, 2ndSing, 3rdSing, 1stPlur, 2ndPlur, 3rdPlur]

// ********************
// currently no use for rndVerb, so commented out
// const rndVerb = (arr, tense, person) => {
//     var i = Math.floor(Math.random()*arr.length);
//     return {english:arr[i][tense][person], foreign: arr[i][tense+'Foreign'][person]}
// }

// gender is stored as an array [male, female, neuter]
// not fully implemented, because the gender of nouns is not currently stored
const rndAdj = (arr, gender) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign[gender]}  
}



const TestPage = (props) => {  
  var noun1 = rndNoun(props.words.nouns);
  //currently no use for verb in sentence
  //var verb1 = rndVerb(props.words.verbs, 'present', 2);
  var adj1 = rndAdj(props.words.adjectives, 0); //masculine because gender not currently defined
  var englishSentence = 'The '+noun1.english +' is '+ adj1.english;
  //NB: 'the' needs to match gender too
  var foreignSentence = 'Ten '+noun1.foreign +' je '+ adj1.foreign;
  
  if (props.transMode === 'fromEng') {
      var questionSentence = englishSentence;
      var answerSentence = foreignSentence;
      var buttonRole = 'Switch to translating INTO English';
    } else {
        questionSentence = foreignSentence;
        answerSentence = englishSentence;
        buttonRole = 'Switch to translating FROM English';
  }

  var answerWords = answerSentence.toLowerCase().split(' ');
  var markedAns = props.userAns.split(' ').map((x, i) => {
      if (x.toLowerCase() === answerWords[i]) {
          return <span className='goodWord' key={i}>{x+' '}</span>
      }
      return <span className='badWord' key={i}>{x+' '}</span>
  }) || <p>give an answer</p>
    
  console.log(markedAns)
  return (
      <div id='testpage'>
        <h2>Translate the following</h2>
        <p id='question'>{questionSentence}</p>
        <div id='answer'><p>{markedAns}</p></div>
        <input type='text' value={props.userAns} onChange={props.changeAns} />
        <p>{props.userAns}</p>
        <p>{answerSentence}</p>
        <button onClick={props.switchModeClick}>{buttonRole}</button>
      </div>
  )
}

export default TestPage;