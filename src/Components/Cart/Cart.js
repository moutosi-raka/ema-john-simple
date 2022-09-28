import React from "react";
import './Cart.css'

const Cart = ({cart}) => {
  return (
    <div>
      <h2>Order Summary</h2>

      <div className="order-info">
        <p>Selected Item: {cart.length}</p>
        <p>Total Price: {}</p>
        <p>Total Shopping Charge: ${}</p>
        <p>Text: ${}</p>
        <h3>Grand Total: {}</h3>
      </div>
    </div>
  );
};

export default Cart;
