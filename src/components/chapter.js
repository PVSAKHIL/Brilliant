import React from 'react'

function Chapter(props){
    var [Border,setBorder]=React.useState(false)
    function handleHover(){
        setBorder(true)
    }
    function handleLeave(){
        setBorder(false)
    }
    return <a href="index.html" className="chapter" onMouseLeave={handleLeave} onMouseOver={handleHover} style={{boxShadow:Border?"0px 0px 3px #d7d7d7":"none"}}>
        <div className="image"><img src={props.image} alt="chapter" /></div>
        <div className="chapter-info">
            <div className="chapter-name">{props.name}</div>
            <div className="chapter-content">{props.content}</div>
        </div>
    </a>
}
export default Chapter