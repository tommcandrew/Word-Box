import React from 'react';

const WordListDisplay = (props) =>  {
    var wordList = [];
    if (props.types.includes('Nouns')) {
        for (var i in props.words.nouns) {
            wordList.push(props.words.nouns[i].english)
        }
    }
    if (props.types.includes('Verbs')) {
        for (i in props.words.verbs) {
            wordList.push(props.words.verbs[i].english)
        }
    }
    if (props.types.includes('Adjectives')) {
        for (i in props.words.adjectives) {
            wordList.push(props.words.adjectives[i].english)
        }
    }
    wordList = wordList.sort().map(x => <li key='{x}'>{x}</li>)
    
    return (
        <div>
            <h1>Words you know</h1>
            <ul>{wordList}</ul>
        </div>
    )
}

export default WordListDisplay;