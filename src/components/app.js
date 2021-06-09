import React from 'react';
import Header from './header'
import Start from './start'
import steps from '../steps'
import Step from './step'
function Home(){
    return <div className="body">
        <Header />
        <Start />
        {steps.map((item,index)=>{
            return <Step 
                number={item.number}
                heading={item.heading}
                key={index}
                content={item.content}
            />
        })} 
    </div>
}
export default Home;