import React from 'react';
import './testimonials.css';
import User from './user.png'

function Testimonials() {
    return(
        <testimonialBody className='tall'>
            <h1 className='testimonialHead'>Testimonials</h1>
            <testimonialMain className= 'tcard3'>
            <testimonialCard className= "tcard">
                <img className='tphoto' src={User} width='50px'/>
                <h2 className ='ttitle'>John Doe</h2>
                <body className = 'testbody'>Review Information</body>
            </testimonialCard>
            <testimonialCard className= "tcard">
                <img className='tphoto' src={User} width='50px'/>
                <h2 className ='ttitle'>John Doe</h2>
                <body className = 'testbody'>Review Information</body>
            </testimonialCard>
            <testimonialCard className= "tcard">
                <img className='tphoto' src={User} width='50px'/>
                <h2 className ='ttitle'>John Doe</h2>
                <body className = 'testbody'>Review Information</body>
                </testimonialCard>
            <testimonialCard className= "tcard">
                <img className='tphoto' src={User} width='50px'/>
                <h2 className ='ttitle'>John Doe</h2>
                <body className = 'testbody'>Review Information</body>
            </testimonialCard>
            </testimonialMain>
        </testimonialBody>
    )
}
export default Testimonials;