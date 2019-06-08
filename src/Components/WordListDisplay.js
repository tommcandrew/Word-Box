import React from 'react';

const WordListDisplay = (props) =>  {
    return (
        <div>
            <h1>Words you know</h1>
            <p>{props.words.nouns[0].english}</p>
        </div>
    )
}

export default WordListDisplay;