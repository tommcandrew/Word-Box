import React from 'react';
import WordListDisplay from './Components/WordListDisplay';
import TestPage from './Components/TestPage';
import {wordList} from './Assets/Vocab';
import './App.css';

class App extends React.Component {
  state = {
    knownWords : wordList,
    typesToShow : ['Nouns', 'Verbs', 'Adjectives'], 
    translationMode : 'fromEng'
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
    console.log('switchmodeHandler called')
    if (this.state.translationMode === 'fromEng') {
      var newMode = 'toEng'
    } else {newMode = 'fromEng'}
    this.setState({translationMode: newMode})
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
        />
      </div>
    );
  } 

}

export default App;
