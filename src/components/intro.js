import React from "react"
function Intro(){
    var [read,setRead]=React.useState(false)
    function display(){
        setRead(true)
    }
    return <div className="intro">
            <h1><b>Logic</b></h1>
            <h3>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h3>
            <div className="part1">
            The beginning of our introductory math journey is Logic.
            Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.<br /><br />
            You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!<span onClick={display} style={{display: read&&"none"}}>Read more</span>
            </div>
            <div className="part2" style={{display:read?"inline":"none"}}>
            By the end of this course, you'll be able to spot logical fallacies, navigate some strategic game theory, understand machine logic, and use the symbolic languages of logic to understand fun riddles.
            </div>
    </div>
}
export default Intro