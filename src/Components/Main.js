import React from 'react';
import img2 from './Mario and Adrian A.jpg'
import img3 from './Mario and Adrian b.jpg'

function Main() {
    return(
        <mainBody>
            <h1 className="mainHead">Little Lemon</h1>
            <h2 className="mainsubHead">Chicago</h2>
            <body className='mainBody'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </body>
            <body className='ownerPic'>
                <img src={img2} height = '100px'/>
                <img src={img3} height = '100px'/>
            </body>
        </mainBody>
    )
}

export default Main;