import Header from './components/Layout/Header';
import Meal from './components/Meal/Meal';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';
import { useContext, useEffect } from 'react';

function App() {
  const { showCart } = useContext(CartContext);

  return (
    <CartProvider>
      <Cart />
      <Header />
      <main className="px-10">
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
