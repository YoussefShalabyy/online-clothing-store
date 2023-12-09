import React from 'react';

import Cart from '../cart/Cart';
const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>

  );
};

export default CartPage;
