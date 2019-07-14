import React from 'react'
import './TextCatalogue.css'
import {Button, Modal, ModalBody, ModalFooter} from  'react-bootstrap';

const TextCatalogue = (props) => {

let deleteModal
if (props.showDeleteModal === false) {
    deleteModal = ''
} else {
    deleteModal = <Modal show='true'><ModalBody>This is the body</ModalBody><ModalFooter><Button>Cancel</Button><Button>Delete</Button></ModalFooter></Modal>
}


let del = document.createElement("span");
	del.innerHTML = "x";
	del.setAttribute("title", "Remove item")

if (props.savedTexts !== '') {

    var textsArray = props.savedTexts.map(function(item, index){
        let textDate = item.timeAndDate.substr(9)
        let textTime = item.timeAndDate.slice(0, 8)
        return (
            <tr key={item.timeAndDate} id={item.timeAndDate}>
                <th><a href='#/' onClick={props.goToReader} id={item.title}>{item.title}</a></th>
                <th>{textDate}</th>
                <th>{textTime}</th>
                <th><span onClick={props.deleteFromCatalogue} title='Delete' className='close-button'>      &times;</span></th>
            </tr>
        )
    })
}

return (
    
    <div className='wrapper'>
    <table className='table'>
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            {textsArray}
        </tbody>
    </table>
    {deleteModal}
    </div>

)
}

export default TextCatalogue