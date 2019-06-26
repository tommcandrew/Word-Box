import React from 'react'

const GrabbedText = (props) => {

    let knownNouns = []
    for (let i = 0; i < props.knownWords.knownWords.nouns.length; i++) {
        let foreignNoun = props.knownWords.knownWords.nouns[i].foreign
        knownNouns.push(foreignNoun)
    }
    let knownVerbs = []
    for (let i = 0; i < props.knownWords.knownWords.verbs.length; i++) {
        let foreignInfinitive = props.knownWords.knownWords.verbs[i].infinitive
        knownVerbs.push(foreignInfinitive)
        let presentForeign = props.knownWords.knownWords.verbs[i].presentForeign
        knownVerbs = knownVerbs.concat(presentForeign)
    }

    let knownAdjectives = []
    for (let i = 0; i < props.knownWords.knownWords.adjectives.length; i++) {
        let foreignAdjectiveFemale = props.knownWords.knownWords.adjectives[i].foreign.female
        let foreignAdjectiveMale = props.knownWords.knownWords.adjectives[i].foreign.male
        let foreignAdjectiveNeuter = props.knownWords.knownWords.adjectives[i].foreign.neuter
        knownAdjectives.push(foreignAdjectiveFemale, foreignAdjectiveMale, foreignAdjectiveNeuter)
    }

        const divStyle = {
            fontSize: 20,
            marginBottom: '20px',
            margin: 'auto',
            display: 'block',
            width: '60%'
        }

        const knownWordStyle = {
            color: 'green'
        }

        const unknownWordStyle = {
            color: 'red'
        }

        let wordArray = props.text.split(/[\s.\s,]+/)
        let newWordArray = wordArray.map(function (word, index) {
            word = word.toLowerCase()

            if (knownNouns.includes(word) || knownVerbs.includes(word) || knownAdjectives.includes(word)) {
            
            return (
                <span key={word+index} style = {knownWordStyle}>{word} </span>
            )

        } else {
            return (
                <span key={word+index} style={unknownWordStyle}>{word} </span>
            )
        }
        }
        )

        return (
            <div id='grabbedText' style = {divStyle}>{newWordArray}</div>
        )

       

}

export default GrabbedText
