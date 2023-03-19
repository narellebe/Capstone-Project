import React from 'react';
import './App.css';
import img1 from './restauranfood.jpg'

function Header() {
  return (
    <headerBody>
      <h1 className='headerText'>
        <div>Little Lemon</div>
      </h1>
      <h2 className='subHeading'>
        <div>Chicago</div>
      </h2>
      <body className='body'>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </body>
      <body className='headerimg'>
        <img src={img1} height = '100px'/>
      </body>
      <btn className='llbtn'>
        <h3>Reserve a Table</h3>
      </btn>
    </headerBody>
)}

export default Header;

