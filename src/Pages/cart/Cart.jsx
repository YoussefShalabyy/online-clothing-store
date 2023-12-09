// Cart.js

import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <Typography variant="h6" color="text.secondary">
        Cart Items: {cartItems ? cartItems.length : 0}
      </Typography>
      <ul>
        {cartItems &&
          cartItems.map((item, index) => (
            <li key={index}>
              {item.name} {/* Assuming item has a 'name' property */}
              <Button size="small" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
