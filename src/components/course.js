import React from "react"

function Course(){
    return <div className="courses">
        <img src="./images/course.png" alt="img" />
        <div className="info">
            <div className="quiz">
                <h1>37</h1>
                <p>Interactive quizzes</p>
            </div>
            <div className="exercises">
                <h1>265+</h1>
                <p>Concepts and exercises</p>
            </div>
        </div>
        <button>Start Course</button>
    </div>
}
export default Course