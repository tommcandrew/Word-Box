import React from 'react';
import Reader from './Components/Reader';
import WordListDisplay from './Components/WordListDisplay';
import TestPage from './Components/TestPage';
import {rndSentence} from './Components/TestMaker';
import {wordList} from './Assets/Vocab';
import './App.css';
import {Button} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    knownWords : wordList,
    typesToShow : ['Nouns', 'Verbs', 'Adjectives'], 
    translationMode : 'fromEng', 
    userAnswer: '',
    sentences: rndSentence(wordList)
  }

  changeToShow = (category) => {
    var ttShow = Array.from(this.state.typesToShow);
    if (ttShow.includes(category)) {
      ttShow = ttShow.filter(x => x!==category)
    } else {ttShow.push(category)}
    this.setState({typesToShow: ttShow});
    //console.log(category, ' was clicked', ttShow)
  }

  switchModeHandler = () => {
    if (this.state.translationMode === 'fromEng') {
      var newMode = 'toEng'
    } else {newMode = 'fromEng'}
    this.setState({translationMode: newMode})
  }

  ChangeAnswerHandler = (event) => {
    if (this.state.translationMode === 'fromEng') {
      var ans = this.state.sentences.foreign
    } else {ans = this.state.sentences.english}
    console.log(ans, this.state.userAnswer)
    if (event.target.value.toLowerCase() === ans.toLowerCase()) {
      this.setState({sentences: rndSentence(this.state.knownWords), userAnswer:''})
    } else { this.setState({userAnswer:event.target.value}) }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Word Box</header>
        <Button variant='info'>Test</Button>
        <Reader />
        <WordListDisplay 
          words={this.state.knownWords} 
          types={this.state.typesToShow}
          changeTypes={this.changeToShow}
        />
        <TestPage 
          words={this.state.knownWords}
          transMode={this.state.translationMode}
          switchModeClick={this.switchModeHandler}
          userAns={this.state.userAnswer}
          testQ={this.state.sentences}
          changeAns={this.ChangeAnswerHandler}
        />
      </div>
    );
  } 

}

export default App;
