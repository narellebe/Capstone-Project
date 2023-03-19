import React from 'react';
import './App.css';

function Specials() {
    return(
        <specialsBody>
            <h1 className= 'specialsHeader'>
                Specials
            </h1>
            <btn className='llbtn'>
                Online Menu
            </btn>
            <specialsCard>
                <h2>Greek Salad</h2>
                <body className="pricetag">$12.99</body>
                <specialsBody>
                <body>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </body>
                </specialsBody>
            </specialsCard>
            <specialsCard>
                <h2>Bruchetta</h2>
                <body className="pricetag">$5.99</body>
            <specialsBody>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
            </specialsBody>
            </specialsCard>
            <specialsCard>
                <h2>Lemon Dessert</h2>
                <body className="pricetag">$5.99</body>
                <specialsBody>
                <body>This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</body>
                </specialsBody>
            </specialsCard>
        </specialsBody>
    )
}
export default Specials;