import React from 'react';
import WordListDisplay from './Components/WordListDisplay';
import TestPage from './Components/TestPage';
import {rndSentence} from './Components/TestMaker';
import {wordList} from './Assets/Vocab';
import './App.css';

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
    this.setState({userAnswer:event.target.value})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">Soon to be a language learning app
        </header>
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
