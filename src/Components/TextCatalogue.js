import React from 'react'

const TextCatalogue = (props) => {

const closeButtonStyle = {
    fontSize: '20px',
    color: 'red',
    cursor: 'pointer'
}

var del = document.createElement("span");
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
                <th><span style={closeButtonStyle} onClick={props.deleteFromCatalogue} title='Delete'>      &times;</span></th>
            </tr>
        )
    })
}

return (
   
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

)
}

export default TextCatalogue