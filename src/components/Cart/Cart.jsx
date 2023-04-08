import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {
  // const cart = props.cart;
  // const { cart } = props;

  // console.log(cart)

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;



  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }


    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;

  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShipping + tax;


  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;