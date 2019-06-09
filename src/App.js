import React from 'react';
import WordListDisplay from './Components/WordListDisplay';
import {wordList} from './Assets/Vocab';
import './App.css';

class App extends React.Component {
  state = {
    knownWords : wordList,
    typesToShow : ['Nouns', 'Verbs', 'Adjectives']
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">Soon to be a language learning app
        </header>
        <WordListDisplay 
          words={this.state.knownWords} 
          types={this.state.typesToShow}
        />
      </div>
    );
  } 

}

export default App;
