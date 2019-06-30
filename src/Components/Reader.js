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

    grabText = () => {

        let pastedText = this.refs.myTextArea.value
        let newTitle = this.refs.myTitleArea.value
        this.props.updateText(pastedText)
        this.props.updateTitle(newTitle)
        this.props.updateMode('read')
    }

    editText = () => {
        this.props.updateMode('paste')
    }

    saveText = () => {
        var d = new Date()
        var dateString = d.getHours() + ':' + d.getMinutes() + ' ' + d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear().toString().substr(-2)
        this.props.saveText(dateString, this.props.title, this.props.text)
        this.props.updateMode('saved')
    }
   
    render() {

        const textAreaStyles = {
            fontSize: 20,
            marginBottom: '20px',
            margin: 'auto',
            display: 'block',
            width: '60%'
        }
        
        const buttonStyles = {
            display: 'inline-block',
            fontSize: '25px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            width: '100px'
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

        )} else if (this.props.mode === 'read') {

            return (

                <div>
                    <div style={textBoxStyle}>
                        <GrabbedText title={this.props.title} text={this.props.text} knownWords={this.props.knownWords}/>
                    </div>
                   <button style={buttonStyles} onClick={this.editText}>Edit</button>
                   <button style={buttonStyles} onClick={this.saveText}>Save</button>
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