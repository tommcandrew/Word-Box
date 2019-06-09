import React from 'react';
import WordListDisplay from './Components/WordListDisplay';
import {wordList} from './Assets/Vocab';
import './App.css';

class App extends React.Component {
  state = {
    knownWords : wordList,
    typesToShow : ['Nouns', 'Verbs', 'Adjectives']
  }

  changeToShow = (category) => {
    console.log(category, ' was clicked')
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
      </div>
    );
  } 

}

export default App;
