import React from 'react'
import Chapter from './chapter'
import chapters from '../chapters'


function Step(props){
    return <div className="step">
        <div className="heading">
            <div className="step-number"><span>{props.number}</span></div>
            <div className="step-info">
                <div className="step-heading">{props.heading}</div>
                <div className="step-content">{props.content}</div>
            </div>
        </div>
        <div className="chapters">
            {chapters.map((item,index)=>{
                if(item.step===props.number){
                return <Chapter 
                    name={item.name}
                    image={item.image}
                    content={item.content}
                    key={index}
                />}
                else{
                    return ""        
                }
            })}
        </div>
    </div>
}
export default Step