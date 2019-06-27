import React from 'react'
import GrabbedText from './GrabbedText'

class Reader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: 'paste',
            userInput: '',
            text: '',
            title: ''
        }

    }

    handleChangeText = (event) => {
        this.setState(
            {userInput: event.target.value}
        )
    }

    handleChangeTitle = (event) => {
        this.setState(
            {textTitle: event.target.value}
        )
    }

    grabText = () => {

        let pastedText = this.refs.myTextArea.value
        this.setState({
            mode: 'read',
            text: pastedText
        })
    }

    editText = () => {
        this.setState(
            {mode: 'paste'}
        )
    }

    saveText = () => {
        var d = new Date()
        var dateString = d.getHours() + ':' + d.getMinutes() + ' ' + d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear().toString().substr(-2)
        this.props.saveText(dateString, this.state.textTitle, this.state.text)
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
            display: 'block',
            fontSize: '25px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            width: '100px'
        }
        
        const mainAreaStyles = {
            display: 'block'
        }

        if (this.state.mode === 'paste'){

        return (

            <div id='main-area' style={mainAreaStyles}>
                <input placeholder='Enter title...' style={textAreaStyles} onChange={this.handleChangeTitle}></input>
                <textarea id='textArea' ref='myTextArea' rows='20' cols='80' placeholder='Paste your text here...' value={this.state.userInput} style={textAreaStyles} onChange={this.handleChangeText}></textarea>
                <button onClick={this.grabText} style={buttonStyles}>Go!</button>
            </div>

        )} else {

            return (

                <div>
                   <GrabbedText text={this.state.text} knownWords={this.props}/>
                   <button style={buttonStyles} onClick={this.editText}>Edit</button>
                   <button style={buttonStyles} onClick={this.saveText}>Save</button>
                </div>
            )
        }
    }
}

export default Reader 