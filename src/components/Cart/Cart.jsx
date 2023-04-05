import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShippingCost += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + totalShippingCost + tax;
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShippingCost}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <div className="clear-cart-btn">
        <p>Clear Cart</p>
        <button onClick={handleClearCart} className="font-icon">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Cart;
