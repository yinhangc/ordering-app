import CartList from './CartList';
import Checkout from './Checkout';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import { useState, useContext, useEffect } from 'react';

const Cart = () => {
  const { showCart } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    setCheckout(false);
  }, [showCart]);

  return (
    <>
      {showCart && (
        <Modal className="max-w-3xl">
          {checkout ? (
            <Checkout setCheckout={setCheckout} />
          ) : (
            <CartList setCheckout={setCheckout} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Cart;
