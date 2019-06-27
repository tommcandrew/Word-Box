import React from 'react'

const TextCatalogue = (props) => {

var listStyle = {
    listStyleType: 'none'
}

var textCatalogueStyle = {
    marginBottom: '50px'
}

if (props.savedTexts != '') {

var textsArray = props.savedTexts.map(function(item, index){
    return (
        <div key={item.date}>
            <ul style={listStyle}>
                <li>{item.date}</li>
                <li><a href=''>{item.title}</a></li>
            </ul>
        </div>
    )
})
}


return (
    <div style={textCatalogueStyle}>
        <h2>Your texts: </h2>
        <div>{textsArray}</div>
    </div>
)
}

export default TextCatalogue