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
    var ttShow = Array.from(this.state.typesToShow);
    if (ttShow.includes(category)) {
      ttShow = ttShow.filter(x => x!==category)
    } else {ttShow.push(category)}
    this.setState({typesToShow: ttShow});
    //console.log(category, ' was clicked', ttShow)
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
