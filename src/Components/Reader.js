import React from 'react'
import GrabbedText from './GrabbedText'
import {Button, ButtonGroup} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast'
import './Reader.css'

class Reader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: this.props.mode,
            currentTitle: '',
            userTextInput: '',
            showSaveAlert: false,
            showBlankAlert: false
        }
    }

    addNewText = () => {
        this.props.updateMode('paste')
        this.props.clearStateTextInfo()
    }

    /*this is included for when edit-saved-text mode is opened and the initial values 
    of the input fields need to be the same as the title and text values of App's state. 
    They have to be in Reader's state to allow the user to use the input
    elements on the page*/ 
    componentWillReceiveProps = (nextProps) => {
        this.setState(
            {currentTitle: nextProps.title,
            userTextInput: nextProps.text
            }
        )
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

    handleClose = () => {
        this.setState(
            {showSaveAlert: false}
        )
    }

    handleCloseBlankAlert = () => {
        this.setState(
            {showBlankAlert: false}
        )
    }

    hideSaveAlert = () => {
        this.setState(
            {showSaveAlert: false}
        )
    }

    saveEditedText = () => {
        if (this.state.userTextInput === '') {
            this.setState(
                {showBlankAlert: true}
            )
            return
        } else {

        /*the following code is almsot identical to that in the saveText method below - 
        not very DRY but I was unable to get a separate createDeafultTitle method working*/

        var title
        var firstFiveWords
        if (this.refs.myEditedTitleArea.value !== '') {
            title = this.refs.myEditedTitleArea.value
            this.props.updateTitle(title)
        } else {
            var defaultTitle = ''
            let splitUpText = this.refs.myEditedTextArea.value.split(' ')
            if (splitUpText.length < 6) {
                firstFiveWords = splitUpText.slice(0, splitUpText.length) 
            } else {
                firstFiveWords = splitUpText.slice(0, 6)   
            }
            
            var firstFiveWordsString = firstFiveWords.join(' ')
            
            if (firstFiveWordsString.length > 60) {
                defaultTitle = firstFiveWordsString.substr(0, 30) + '...'
                title = defaultTitle
                this.props.updateTitle(title)
            } else if (splitUpText.length < 6) {
                firstFiveWords = splitUpText.slice(0, splitUpText.length) 
                defaultTitle = ''
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
            
            this.props.saveEditedText(title, this.refs.myEditedTextArea.value)
            this.setState(
                {showSaveAlert: true}
            )
            this.props.updateMode('read')
    }
    }

    saveText = () => {
        if (this.refs.myTextArea.value === '') {
            this.setState(
                {showBlankAlert: true}
            )
            return
        } else {
            this.setState(
                {showBlankAlert: false}
            )
        var pastedText = this.refs.myTextArea.value
        this.props.updateText(pastedText)

        var title
        var firstFiveWords
        if (this.refs.myTitleArea.value !== '') {
            title = this.refs.myTitleArea.value
            this.props.updateTitle(title)
        } else {
            var defaultTitle = ''
            let splitUpText = this.refs.myTextArea.value.split(' ')
            if (splitUpText.length < 6) {
                firstFiveWords = splitUpText.slice(0, splitUpText.length) 
            } else {
                firstFiveWords = splitUpText.slice(0, 6)   
            }
            
            var firstFiveWordsString = firstFiveWords.join(' ')
            
            if (firstFiveWordsString.length > 60) {
                defaultTitle = firstFiveWordsString.substr(0, 30) + '...'
                title = defaultTitle
                this.props.updateTitle(title)
            } else if (splitUpText.length < 6) {
                firstFiveWords = splitUpText.slice(0, splitUpText.length) 
                defaultTitle = ''
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
    }

    updateTitle = (updatedTitle) => {
        this.props.updateTitle(updatedTitle)
        }

    render() {

        let blankAlert
        if (this.state.showBlankAlert === false) {
            blankAlert = ''
        } else {
            blankAlert = <Toast className='alert' onClose={this.handleCloseBlankAlert} delay={3000} autohide><Toast.Body>Enter some text!</Toast.Body></Toast>
        }

        let saveAlert 
        if (this.state.showSaveAlert === false) {
            saveAlert = ''
        } else {
            saveAlert = <Toast className='alert' onClose={this.handleClose} delay={3000} autohide><Toast.Body>Saved!</Toast.Body></Toast>
        }


        if (this.props.mode === 'paste'){

            return (
                <div className='wrapper'>
                    <div className='flex'> 
                        <div className='col-lg-3 button-area'>
                            <Button variant='primary' block onClick={this.saveText}>Save</Button>
                        </div>
                        <div id='main-area' className="form-group main-area col-lg-6">
                            <input maxLength='50' className="form-control text-area" ref="myTitleArea" placeholder='Enter title... (max 50 characters)' onChange={this.handleChangeTitle} value={this.state.currentTitle}></input>
                            <textarea className="form-control text-area" id='textArea' ref='myTextArea' rows='12' cols='80' placeholder='Paste your text here...' value={this.state.userTextInput} onChange={this.handleChangeText}></textarea>
                        </div>
                        <div className='col-lg-3'>
                            
                        </div>
                    </div>
                    {blankAlert}
                </div>

    )} else if (this.props.mode === 'read'){

            return (
                <div className='wrapper'>
                    <div className='flex'>
                        <ButtonGroup vertical className='col-lg-3 button-area'>                            
                                <Button variant='primary' onClick={this.editSavedText}>Edit</Button>
                                <Button variant='primary' onClick={this.goToStudyMode}>Study</Button>
                                <Button variant='primary' onClick={this.addNewText}>Add new text</Button>
                                <Button variant='danger' onClick={this.props.deleteButtonClicked}>Delete</Button>                            
                        </ButtonGroup>
                        <div className='col-lg-6 main-area white'>
                            <h2 className='text-title'>{this.props.title}</h2>
                            <div className='text-box'>{this.props.text}</div>
                        </div>
                        <div className='col-lg-3'>
                            
                        </div>
                    </div>
                    {saveAlert}
                </div>
            )

    } else if (this.props.mode === 'edit-saved') {

            return (
                <div className='wrapper'>
                    <div className='flex'>
                        <div className='col-lg-3 button-area'>
                            <Button variant='primary' block onClick={this.saveEditedText}>Save</Button>
                        </div>
                        <div className='main-area col-lg-6'>
                            <input className='form-control text-area' ref="myEditedTitleArea" value={this.state.currentTitle} onChange={this.handleChangeTitle}></input>
                            <textarea className='form-control text-area' rows='20' cols='80' ref="myEditedTextArea" value={this.state.userTextInput} onChange={this.handleChangeText}></textarea> 
                        </div>
                        <div className='col-lg-3'>
                            
                        </div>
                    </div>
                    {blankAlert}
                </div>
                )

    } else if (this.props.mode === 'study') {

            return (
                <div className='wrapper'>
                    <GrabbedText 
                      title={this.props.title} 
                      text={this.props.text} 
                      knownWords={this.props.knownWords} 
                      editText={this.editSavedText} 
                      newText={this.addNewText}
                      deleteText={this.props.deleteButtonClicked}
                    />
                </div>
            )
    } 
    }
    }

export default Reader 