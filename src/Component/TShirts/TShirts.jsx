import React from 'react';
import './TShirts.css'
const TShirts = ({tshirt,handleAddToCart}) => {
    const {picture,name,price} = tshirt
  
    return (
        <div className='shirt'>
         
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price :${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)} className='buy-btn'>Buy Now</button>
        </div>
    );
};

export default TShirts;


