import React from 'react';
import './Wordlist.css'

const WordListCheckbox = (props) => {
    // these will be toggle buttons not checkboxes
    if (props.selection.includes('Nouns')) { var nounsClass = "onBtn" }
      else {nounsClass = "offBtn"}
    if (props.selection.includes('Verbs')) { var verbsClass = "onBtn" }
      else {verbsClass = "offBtn"}
    if (props.selection.includes('Adjectives')) { var adjClass = "onBtn" }
      else {adjClass = "offBtn"}
    return (
        <div>
            <h2>Types of words</h2>
            <button className={nounsClass} >Nouns</button>
            <button className={verbsClass} >Verbs</button>
            <button className={adjClass} >Adjectives</button>
        </div>
    )
}

export default WordListCheckbox;