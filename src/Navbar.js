import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './Components/App.css'
import logo from './logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <nav className='NavBarItems'>
              <div>
                <img src={logo} className = "navbar-logo" height="40px"/>
              </div>
          </nav>
          <NavLink to='/home' activeStyle>
            <strong>Home</strong>
          </NavLink>
          <NavLink to='/about' activeStyle>
            <strong>About</strong>
          </NavLink>
          <NavLink to='/reservations' activeStyle>
            <strong>Reservations</strong>
          </NavLink>
          <NavLink to='/order-online' activeStyle>
            <strong>Order Online</strong>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
