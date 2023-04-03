import React from 'react';
import img2 from './Mario and Adrian A.jpg';
import img3 from './Mario and Adrian b.jpg';
import "./main.css";

function Main() {
    return(
        <mainBody >
            <article className= "mainbody">
            <h1 className="mainHead">Little Lemon</h1>
            <h2 className="mainsubHead">Chicago</h2>
            <body className='mainBody1'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </body>
            <body className='ownerPic'>
                <img className= 'over' src={img2} height = '500px'/>
                <img className= 'under' src={img3} height = '500px'/>
            </body>
            </article>
        </mainBody>  
    )
}

export default Main;