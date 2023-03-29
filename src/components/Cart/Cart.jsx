import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShippingCost = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShippingCost += product.shipping;
    }
    const tax = totalPrice * 0.10;
    const grandTotal = totalPrice + totalShippingCost + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;