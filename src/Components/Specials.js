import React from 'react';
import './specials.css';
import GreekSalad from "../Assets/greek salad.jpg";
import Bruchetta from "../Assets/bru.PNG";
import LemonDessert from "../Assets/lemon dessert.jpg";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardLink,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { NavBtn } from './NavbarElements';
import { NavBtnLink } from './NavbarElements';


function Specials() {
    return(
        
            <specialsParent className="specialsParent">
            <h1 className= 'specialsHeader'>Specials</h1>
            <NavBtn className='spBtn'><NavBtnLink to='/order-online'><b>Order Online</b></NavBtnLink></NavBtn>
            <cardParent classname='cardParent'>
            <MDBCard className='specialsCard'>
                <MDBCardImage className="spCardImg"
                    src={GreekSalad} height='300.5rem'
                    orientation='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className="spTitle">Greek Salad</MDBCardTitle>
                    <MDBCardText> <small className="price">$12.99</small> </MDBCardText>
                    <MDBCardText className="spBody">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</MDBCardText>
                    <MDBCardLink> <small className="text-medium-emphasis">Order a Delivery</small> </MDBCardLink>
                 </MDBCardBody>
            </MDBCard>
            <MDBCard className='specialsCard'>
                <MDBCardImage className="spCardImg"
                    src={Bruchetta} height='300.5rem'
                    orientation='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className="spTitle">Bruschetta</MDBCardTitle>
                    <MDBCardText> <small className="price">$5.99</small> </MDBCardText>
                    <MDBCardText className="spBody">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</MDBCardText>
                    <MDBCardLink> <small className="text-medium-emphasis">Order a Delivery</small> </MDBCardLink>
                 </MDBCardBody>
            </MDBCard>
            <MDBCard className='specialsCard'>
                <MDBCardImage className="spCardImg"
                    src={LemonDessert} height='300.5rem'
                    orientation='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className="spTitle">Lemon Dessert</MDBCardTitle>
                    <MDBCardText> <small className="price">$5.00</small> </MDBCardText>
                    <MDBCardText className="spBody">This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</MDBCardText>
                    <MDBCardLink> <small className="text-medium-emphasis">Order a Delivery</small> </MDBCardLink>
                 </MDBCardBody>
            </MDBCard>
            </cardParent>
        </specialsParent>
    )
}
export default Specials;