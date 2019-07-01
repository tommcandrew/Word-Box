import React from 'react'
import GrabbedText from './GrabbedText'

class Reader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: this.props.mode,
            userTitleInput: '',
            userTextInput: '',
            title: '',
            text: props.text
        }
    }

    handleChangeText = (event) => {
        this.setState(
            {userTextInput: event.target.value}
        )
    }

    handleChangeTitle = (event) => {
        this.setState(
            {userTitleInput: event.target.value}
        )
    }

    updateTitle = (updatedTitle) => {
        this.props.updateTitle(updatedTitle)
    }

    grabText = () => {

        let pastedText = this.refs.myTextArea.value
        let newTitle = this.refs.myTitleArea.value
        this.props.updateText(pastedText)
        this.props.updateTitle(newTitle)
        this.props.updateMode('grabbed')
    }
   
    render() {

        const textAreaStyles = {
            fontSize: 20,
            marginBottom: '20px',
            margin: 'auto',
            display: 'block',
            width: '60%'
        }
        
        const mainAreaStyles = {
            display: 'block'
        }

        const textBoxStyle = {
            border: '2px solid black',
            fontSize: 20,
            marginBottom: '20px',
            marginTop: '100px',
            margin: 'auto',
            display: 'block',
            width: '60%',
            textAlign: 'left'
        }

        const buttonStyles = {
            display: 'inline-block',
            fontSize: '25px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            width: '100px'
        }

        const savedMessageStyle = {
            paddingTop: '50px'
        }

        if (this.props.mode === 'paste'){

        return (

            <div id='main-area' style={mainAreaStyles}>
                <input ref='myTitleArea' placeholder='Enter title...' style={textAreaStyles} onChange={this.handleChangeTitle} value={this.state.userTitleInput}></input>
                <textarea id='textArea' ref='myTextArea' rows='20' cols='80' placeholder='Paste your text here...' value={this.state.userTextInput} style={textAreaStyles} onChange={this.handleChangeText}></textarea>
                <button onClick={this.grabText} style={buttonStyles}>Go!</button>
            </div>

        )} else if (this.props.mode === 'grabbed') {

            return (

                <div>
                    <div style={textBoxStyle}>
                        <GrabbedText title={this.props.title} text={this.props.text} knownWords={this.props.knownWords} updateTitle={this.updateTitle} updateMode={this.props.updateMode} saveText={this.props.saveText}/>
                    </div>
                   
                </div>
            )
        } else if (this.props.mode === 'saved') {
            return (
            <h2 style={savedMessageStyle}>Saved!</h2>
            )
        }
    }
}

export default Reader 