import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    // 1. use if else
    let massage ;
    if(cart.length === 0){
     massage = <p>Please add some product </p>
    }
    else{
        massage = <p>Thanks for add select products</p>
    }
    return (
        <div>
           
            <h3 className={cart.length === 1 ?'lightseagreen' : 'lightcoral'}>Order Summary:{cart.length}</h3>
            <p className={`bold bordered ${cart.length===3?'light' :'lightcoral'}`}>Something</p>
             {/* 2. ternary condition */} 
            {cart.length>2 ? <span>Try one more</span> :<span>Fokiraa</span>}
            {massage}

            {
                cart.map(tshirt => 
                <p className='name' key={tshirt._id} >{tshirt.name} 
                   <button className='buy-btn' 
                onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {/* logical && */}
            {cart.length == 2 && <p>Double Bonanza!!</p>}
            {cart.length == 3  || <h3>3 ta to hoilo na</h3>}
        </div>
    );
};

export default Cart;

// **
// Conditional Rendering
//1. use if or if else to set a variable that will contain an element ,Component
// 2. ternary condition ? 'for true' : 'for false'
// 3. logical &&: if the condition is true then the next thing is displayed
// 4. logical ||: if the condition is false then the next thing is displayed
// 


// ** 
// Conditional CSS
// 1. use ternary
// 2. ternary inside template string