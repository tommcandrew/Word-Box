import React from 'react'

class GrabbedText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTitleInput: '',
            grabbedTitle: 'This is the default title'
        }
    }

    changeDefaultTitle = (event) => {
        this.setState(
            {grabbedTitle: event.target.value}
        )
    }

    componentDidMount = () => {
        if (this.props.title !== '') {
            this.setState(
                {grabbedTitle: this.props.title}
            )
        } else {
            var splitUpText = this.props.text.split(' ')
            var firstFiveWords = splitUpText.slice(0, 6)
            var defaultTitle = firstFiveWords[0] + ' ' + firstFiveWords[1] + ' ' + firstFiveWords[2] + ' ' + firstFiveWords[3] + ' ' + firstFiveWords[4] + ' ' + firstFiveWords[5] + '...'
            this.setState(
                {grabbedTitle: defaultTitle}
            ) 
        }
    }

    editText = () => {
        this.props.updateMode('paste')
    }

    saveText = () => {
        if (this.state.grabbedTitle === '') {
            alert('Please add a title')
            return
        } else {
        this.props.updateTitle(this.state.grabbedTitle)
        var d = new Date()
        var dateString = d.getHours() + ':' + d.getMinutes() + ' ' + d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear().toString().substr(-2)
        this.props.saveText(dateString, this.state.grabbedTitle, this.props.text)
        this.props.updateMode('saved')
    }
    }

    render() {

    let knownNouns = []
    for (let i = 0; i < this.props.knownWords.nouns.length; i++) {
        let foreignNoun = this.props.knownWords.nouns[i].foreign
        knownNouns.push(foreignNoun)
    }

    let knownVerbs = []
    for (let i = 0; i < this.props.knownWords.verbs.length; i++) {
        let foreignInfinitive = this.props.knownWords.verbs[i].infinitive
        knownVerbs.push(foreignInfinitive)
        let presentForeign = this.props.knownWords.verbs[i].presentForeign
        knownVerbs = knownVerbs.concat(presentForeign)
    }

    let knownAdjectives = []
    for (let i = 0; i < this.props.knownWords.adjectives.length; i++) {
        let foreignAdjectiveFemale = this.props.knownWords.adjectives[i].foreign.female
        let foreignAdjectiveMale = this.props.knownWords.adjectives[i].foreign.male
        let foreignAdjectiveNeuter = this.props.knownWords.adjectives[i].foreign.neuter
        knownAdjectives.push(foreignAdjectiveFemale, foreignAdjectiveMale, foreignAdjectiveNeuter)
    }

    let knownDefArticles = []
    knownDefArticles.push(this.props.knownWords.defArticle.foreign.male.toLowerCase())
    knownDefArticles.push(this.props.knownWords.defArticle.foreign.female.toLowerCase())
    knownDefArticles.push(this.props.knownWords.defArticle.foreign.neuter.toLowerCase())

    let allKnownWords = []

    allKnownWords = allKnownWords.concat(knownNouns, knownVerbs, knownAdjectives, knownDefArticles)

    let allKnownWordsUpperFirstChar = allKnownWords.map(function(word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    let allKnownWordsUpperAll = allKnownWords.map(function(word, index) {
        return word.toUpperCase()
    })

        const divStyle = {
            fontSize: 20,
            marginBottom: '20px',
            margin: 'auto',
            display: 'block',
            width: '100%',
            padding: '20px'
        }

        const titleStyle = {
            fontSize: 30,
            textAlign: 'center',
            paddingTop: 20,
            width: '100%'
        }

        const buttonStyles = {
            display: 'inline-block',
            fontSize: '25px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            width: '100px'
        }

        const knownWordStyle = {
            color: 'green'
        }

        const unknownWordStyle = {
            color: 'red'
        }

        var splitText = this.props.text.match(/\w+|\s+|[^\s\w]+/g)

        let newWordArray = splitText.map(function (word, index) {
            if (!word.match(/\w+/g)) {
                return word
            } else {
                
            if (allKnownWords.includes(word) || allKnownWordsUpperFirstChar.includes(word) || allKnownWordsUpperAll.includes(word)) {
            
            return (
                <span key={word+index} style = {knownWordStyle}>{word}</span>
            )

        } else {
            return (
                <span key={word+index} style={unknownWordStyle}>{word}</span>
            )
        }
    }
    }
    )

        return (
            <div>
                <input type='text' autoFocus style={titleStyle} value={this.state.grabbedTitle} onChange={this.changeDefaultTitle}></input>
                <div id='grabbedText' style = {divStyle}>{newWordArray}</div>
                <button style={buttonStyles} onClick={this.editText}>Edit</button>
                <button style={buttonStyles} onClick={this.saveText}>Save</button>
            </div>
        )
    }
}

export default GrabbedText
