import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalItem: 0,
  showCart: false,
  setShowCart: (value) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
