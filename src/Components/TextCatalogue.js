import React from 'react'

const TextCatalogue = (props) => {

var listStyle = {
    listStyleType: 'none'
}

var textCatalogueStyle = {
    marginBottom: '50px'
}

const headingStyle = {
    paddingTop: '50px',
    paddingBottom: '25px'
}

const linkStyle = {
    fontSize: '30px'
}

const linkDivStyle = {
    paddingBottom: '25px'
}

if (props.savedTexts !== '') {

var textsArray = props.savedTexts.map(function(item, index){
    return (
        <div key={item.date} style={linkDivStyle}>
            <ul style={listStyle}>
                <li>{item.date}</li>
                <li><a style={linkStyle} href='#/' onClick={props.goToReader} id={item.title}>{item.title}</a></li>
            </ul>
        </div>
    )
})
}

return (
    <div style={textCatalogueStyle}>
        <h2 style={headingStyle}>Your texts: </h2>
        <div>{textsArray}</div>
    </div>
)
}

export default TextCatalogue