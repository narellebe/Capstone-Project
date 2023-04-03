import React from 'react';
import './App.css';
import img1 from './restauranfood.jpg'
import { NavBtn } from './NavbarElements';
import { NavBtnLink } from './NavbarElements';

function Header() {
  return (
    <headerBody>
      <h1 className='headerText'>
        <div>Little Lemon</div>
      </h1>
      <h2 className='subHeading'>
        <div>Chicago</div>
      </h2>
      <body className='bodyH'>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </body>
      <body className='headerimg'>
        <img src={img1} width = '420px' height = '370px'/>
      </body>
      <NavBtn className='llbtn'>
      <NavBtnLink to='/reservations'><b>Reserve a Table</b></NavBtnLink>
      </NavBtn>
    </headerBody>
)}

export default Header;

