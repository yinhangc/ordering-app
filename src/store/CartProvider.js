import CartContext from './cart-context';
import { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHOW_CART':
      return { ...state, showCart: action.value };

    case 'ADD_ITEM':
      const existing = state.items.find((el) => el.id === action.item.id);
      if (!existing) {
        return {
          ...state,
          items: [...state.items, action.item],
          totalItem: state.totalItem + action.item.amount,
          totalAmount:
            state.totalAmount + action.item.amount * action.item.price,
        };
      } else {
        const updatedItems = state.items.map((el) => {
          if (el.id === action.item.id) el.amount += action.item.amount;
          return el;
        });
        return {
          ...state,
          items: updatedItems,
          totalItem: state.totalItem + action.item.amount,
          totalAmount:
            state.totalAmount + action.item.amount * action.item.price,
        };
      }

    case 'REMOVE_ITEM':
      let updatedItems;
      const item = state.items.find((el) => el.id === action.id);
      if (item.amount === 1)
        updatedItems = state.items.filter((el) => el.id !== action.id);
      else
        updatedItems = state.items.map((el) => {
          if (el.id === action.id) el.amount -= 1;
          return el;
        });
      return {
        ...state,
        items: updatedItems,
        totalItem: state.totalItem - 1,
        totalAmount: state.totalAmount - item.price,
      };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalItem: 0,
    showCart: false,
  });

  const showCartHandler = (value) => {
    dispatch({ type: 'SET_SHOW_CART', value });
  };

  const addItemHandler = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItem: cartState.totalItem,
    showCart: cartState.showCart,
    setShowCart: showCartHandler,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
