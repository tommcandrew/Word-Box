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

// componentWillReceiveProps = (nextProps) => {
//     debugger;
//     this.setState(
//     {
//     userTextInput: nextProps.text,
//     userTitleInput: nextProps.title
//     }
//     )
//    }


// grabText = () => {

//     let pastedText = this.refs.myTextArea.value
//     let newTitle = this.refs.myTitleArea.value
//     this.props.updateText(pastedText)
//     this.props.updateTitle(newTitle)
//     this.props.updateMode('grabbed')
// }

    addNewText = () => {
        this.props.updateMode('paste')
        this.props.clearStateTextInfo()
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
            {userTitleInput: event.target.value}
        )
    }

    saveEditedText = () => {
        this.props.saveEditedText(this.state.userTitleInput, this.state.userTextInput)
        this.props.updateMode('read')
    }

    saveText = () => {
        debugger;
        var newTitle
        if (this.refs.myTitleArea.value !== '') {
            newTitle = this.refs.myTitleArea.value
        } else {
            let splitUpText = this.props.text.split(' ')

        if (splitUpText.length < 6) {
            var firstFiveWords = splitUpText.slice(0, splitUpText.length) 
            var defaultTitle = ''
            for (let i = 0; i < splitUpText.length; i++){
                defaultTitle = defaultTitle + firstFiveWords[i] + ' '
                }
                defaultTitle = defaultTitle.slice(0, -1)
                defaultTitle = defaultTitle + '...'
            this.setState(
                {userTitleInput: defaultTitle}
                ) 
            } else {
                
                firstFiveWords = splitUpText.slice(0, 6) 
                defaultTitle = ''
                for (let i = 0; i < 6; i++ ){
                    defaultTitle = defaultTitle + firstFiveWords[i] + ' '
                }
                defaultTitle = defaultTitle.slice(0, -1)
                defaultTitle = defaultTitle + '...'
                this.setState(
                    {userTitleInput: defaultTitle}
                ) 
            }
        }

        let pastedText = this.refs.myTextArea.value
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

        // this.props.updateTitle(newTitle)
        this.props.updateText(pastedText)
        this.props.saveText(timeAndDate, this.state.userTitleInput, this.state.userTextInput)
        this.props.updateMode('read')
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
            fontSize: '25px',
            margin: '0 auto',
            marginBottom: '100px',
            marginTop: '20px',
            width: '100px'
        }

        // const savedMessageStyle = {
        //     paddingTop: '50px'
        // }

        if (this.props.mode === 'paste'){

            return (

                <div id='main-area' style={mainAreaStyles}>
                    <input ref='myTitleArea' placeholder='Enter title...' style={textAreaStyles} onChange={this.handleChangeTitle} value={this.state.userTitleInput}></input>
                    <textarea id='textArea' ref='myTextArea' rows='20' cols='80' placeholder='Paste your text here...' value={this.state.userTextInput} style={textAreaStyles} onChange={this.handleChangeText}></textarea>
                    <button onClick={this.saveText} style={buttonStyles}>Save</button>
                </div>

    )} else if (this.props.mode === 'read'){

            return (
                <div>
                    <h2>{this.props.title}</h2>
                    <div style={textBoxStyle}>{this.props.text}</div>
                    <button onClick={this.editSavedText}>Edit</button>
                    <button onClick={this.goToStudyMode}>Study</button>
                    <button onClick={this.addNewText}>Add new text</button>
                    <button onClick={this.deleteText}>Delete</button>
                </div>
            )

    } else if (this.props.mode === 'edit-saved'){

            return (
                <div style={mainAreaStyles}>
                    <input style={textAreaStyles} value={this.state.userTitleInput} onChange={this.handleChangeTitle}></input>
                    <textarea rows='20' cols='80' value={this.state.userTextInput} onChange={this.handleChangeText} style={textAreaStyles}></textarea>
                    <button style={buttonStyles} onClick={this.saveEditedText}>Save</button>
                </div>
                )

    } else if (this.props.mode === 'study') {

            return (

                <div>
                    <div style={textBoxStyle}>
                        <GrabbedText title={this.props.title} text={this.props.text} knownWords={this.props.knownWords} updateTitle={this.updateTitle} updateMode={this.props.updateMode} editText={this.editSavedText }saveText={this.props.saveText} deleteText={this.deleteText}/>
                    </div>
                </div>
            )

    } 
        // else if (this.props.mode === 'saved') {
                
        //         return (

        //             <h2 style={savedMessageStyle}>Saved!</h2>
        //             )
        //         }
        }
    }

export default Reader 