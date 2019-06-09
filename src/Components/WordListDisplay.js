import React from 'react';

const WordListDisplay = (props) =>  {
    var wordList = [];
    if (props.types.includes('Nouns')) {
        for (var i in props.words.nouns) {
            wordList.push(<li>{props.words.nouns[i].english}</li>)
        }
    }
    return (
        <div>
            <h1>Words you know</h1>
            <ul>{wordList}</ul>
        </div>
    )
}

export default WordListDisplay;