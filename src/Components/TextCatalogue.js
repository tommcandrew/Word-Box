import React from 'react'
import './TextCatalogue.css'
import {Button, Modal, ModalBody, ModalFooter} from  'react-bootstrap';

const TextCatalogue = (props) => {

let deleteModal = 
<Modal show={props.showDeleteModal}>
    <ModalBody>Are you sure you want to delete this text?</ModalBody>
    <ModalFooter>
        <Button variant='info' onClick={props.hideDeleteModal}>Cancel</Button>
        <Button variant='danger' onClick={props.deleteFromCatalogue}>Delete</Button>
    </ModalFooter>
</Modal>

let del = document.createElement("span");
	del.innerHTML = "x";
	del.setAttribute("title", "Remove item")

if (props.savedTexts !== '') {

    var textsArray = props.savedTexts.map(function(item, index){
        let textDate = item.timeAndDate.substr(9)
        let textTime = item.timeAndDate.slice(0, 8)
        return (
            <tr key={item.timeAndDate} id={item.timeAndDate}>
                <td><a href='#/' onClick={props.goToReader} id={item.title}>{item.title}</a></td>
                <td className='text-date'>{textDate}</td>
                <td className='text-time'>{textTime}</td>
                <td><span onClick={props.deleteFromCatalogue} title='Delete' className='close-button'>      &times;</span></td>
            </tr>
        )
    })
}

return (
    
    <div className='wrapper'>
    <h2>Your saved texts </h2>
    <table className='table'>
        <tbody>
            {textsArray}
        </tbody>
    </table>
    {deleteModal}
    </div>

)
}

export default TextCatalogue