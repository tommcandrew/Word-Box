import React from 'react'
import GrabbedText from './GrabbedText'
import {Button} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast'

class Reader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: this.props.mode,
            currentTitle: '',
            userTextInput: '',
            showSaveAlert: false
        }
    }

    addNewText = () => {
        this.props.updateMode('paste')
        this.props.clearStateTextInfo()
    }

    /*this is included for when edit-saved-text mode is opened and the initial values of the input fields need to be the 
    same as the title and text values of App's state. They have to be in Reader's state to allow the user to use the input
    elements on the page*/ 
    componentWillReceiveProps = (nextProps) => {
        this.setState(
            {currentTitle: nextProps.title,
            userTextInput: nextProps.text
            }
        )
    }

    deleteText = () => {
        this.props.deleteText()
    }

    editSavedText = () => {
        this.props.updateMode('edit-saved')
    }

    goToStudyMode = () => {
        this.props.updateMode('study')
    }

    handleChangeText = (event) => {
        this.setState(
            {userTextInput: event.target.value}
        )
    }

    handleChangeTitle = (event) => {
        this.setState(
            {currentTitle: event.target.value}
        )
    }

    hideSaveAlert = () => {
        this.setState(
            {showSaveAlert: false}
        )
    }

    saveEditedText = () => {
        this.props.saveEditedText(this.state.currentTitle, this.state.userTextInput)
        this.setState(
            {showSaveAlert: true}
        )
        this.props.updateMode('read')
    }

    saveText = () => {
        var pastedText = this.refs.myTextArea.value
        this.props.updateText(pastedText)


        var title
        if (this.refs.myTitleArea.value !== '') {
            title = this.refs.myTitleArea.value
            this.props.updateTitle(title)
        } else {
            let splitUpText = this.refs.myTextArea.value.split(' ')
            if (splitUpText.length < 6) {
                var firstFiveWords = splitUpText.slice(0, splitUpText.length) 
                var defaultTitle = ''
                for (let i = 0; i < splitUpText.length; i++){
                    defaultTitle = defaultTitle + firstFiveWords[i] + ' '
                    }
                    defaultTitle = defaultTitle.slice(0, -1)
                    defaultTitle = defaultTitle + '...'
                    title = defaultTitle
                    this.props.updateTitle(title)
                } else {
                    firstFiveWords = splitUpText.slice(0, 6) 
                    defaultTitle = ''
                    for (let i = 0; i < 6; i++ ){
                        defaultTitle = defaultTitle + firstFiveWords[i] + ' '
                    }
                    defaultTitle = defaultTitle.slice(0, -1)
                    defaultTitle = defaultTitle + '...'
                    title = defaultTitle
                    this.props.updateTitle(title)
                }
            }

        let d = new Date()
        let fullTime = d.toTimeString()
        fullTime = fullTime.split(' ')[0]

        let dd = d.getDate()
        let mm = d.getMonth() + 1
        let yy = d.getFullYear().toString().substr(-2)
        if (dd < 10) {
        dd = '0' + dd 
        }
        if (mm < 10) {
        mm = '0' + mm
        }
        let fullDate = dd + '/' + mm + '/' + yy
        let timeAndDate = fullTime + ' ' + fullDate
        
        this.props.saveText(timeAndDate, title, pastedText)
        this.setState(
            {showSaveAlert: true}
        )
        this.props.updateMode('read')
    }

    handleClose = () => {
        this.setState(
            {showSaveAlert: false}
        )
    }

    updateTitle = (updatedTitle) => {
        this.props.updateTitle(updatedTitle)
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
            padding: 20,
            display: 'block',
            width: '60%',
            textAlign: 'left'
        }

        const buttonStyles = {
            display: 'inline-block',
            fontSize: '20px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            marginLeft: 5,
            marginRight: 5
        }

        const alertStyle = {
                position: 'fixed',
                bottom: '5px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#28a745',
                fontSize: 15
        }

        if (this.props.mode === 'paste'){

            return (

                <div id='main-area' style={mainAreaStyles} className="form-group">
                    <input className="form-control" ref='myTitleArea' placeholder='Enter title...' style={textAreaStyles} onChange={this.handleChangeTitle} value={this.state.currentTitle}></input>
                    <textarea className="form-control" id='textArea' ref='myTextArea' rows='20' cols='80' placeholder='Paste your text here...' value={this.state.userTextInput} style={textAreaStyles} onChange={this.handleChangeText}></textarea>
                    <Button variant='primary' onClick={this.saveText} style={buttonStyles}>Save</Button>
                </div>

    )} else if (this.props.mode === 'read' && this.state.showSaveAlert === false){

            return (
                <div>
                    <h2>{this.props.title}</h2>
                    <div style={textBoxStyle}>{this.props.text}</div>
                    <Button variant='primary' style={buttonStyles} onClick={this.editSavedText}>Edit</Button>
                    <Button variant='primary' style={buttonStyles} onClick={this.goToStudyMode}>Study</Button>
                    <Button variant='primary' style={buttonStyles} onClick={this.addNewText}>Add new text</Button>
                    <Button variant='primary' style={buttonStyles} onClick={this.deleteText}>Delete</Button>
                </div>
            )

    } else if (this.props.mode === 'read' && this.state.showSaveAlert === true){

        return (
            <div>
                <h2>{this.props.title}</h2>
                <div style={textBoxStyle}>{this.props.text}</div>
                <Button variant='primary' style={buttonStyles} onClick={this.editSavedText}>Edit</Button>
                <Button variant='primary' style={buttonStyles} onClick={this.goToStudyMode}>Study</Button>
                <Button variant='primary' style={buttonStyles} onClick={this.addNewText}>Add new text</Button>
                <Button variant='primary' style={buttonStyles} onClick={this.deleteText}>Delete</Button>
                <Toast style={alertStyle} onClose={this.handleClose} delay={3000} autohide>
                    <Toast.Body>Your text has been saved!</Toast.Body>
                </Toast>
            </div>
        )

} else if (this.props.mode === 'edit-saved'){

            return (
                <div style={mainAreaStyles}>
                    <input style={textAreaStyles} value={this.state.currentTitle} onChange={this.handleChangeTitle}></input>
                    <textarea rows='20' cols='80' value={this.state.userTextInput} onChange={this.handleChangeText} style={textAreaStyles}></textarea>
                    <Button variant='primary' style={buttonStyles} onClick={this.saveEditedText}>Save</Button>
                </div>
                )

    } else if (this.props.mode === 'study') {

            return (

                <div>
                    <div style={textBoxStyle}>
                        <GrabbedText title={this.props.title} text={this.props.text} knownWords={this.props.knownWords} editText={this.editSavedText} deleteText={this.deleteText}/>
                    </div>
                </div>
            )
    } 
    }
    }

export default Reader 