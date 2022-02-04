import CartList from './CartList';
import Modal from '../UI/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUndo,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = () => {
  const { showCart, setShowCart, totalAmount } = useContext(CartContext);

  return (
    <>
      {showCart ? (
        <Modal className="max-w-3xl">
          <h2>
            <FontAwesomeIcon icon={faShoppingCart} className="pt-0.5 mr-2" />
            你的購物車
          </h2>
          <CartList />
          <div className="flex items-center justify-between text-2xl font-bold mt-4">
            <span className="mr-1">總額:</span>
            <span>${totalAmount}</span>
          </div>
          <div className="flex gap-2 justify-end mt-4">
            <button
              className="flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-red-800 hover:text-white"
              onClick={() => setShowCart(false)}
            >
              <FontAwesomeIcon icon={faUndo} className="mr-2" />
              返回
            </button>
            {totalAmount !== 0 && (
              <button className="flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-emerald-800 hover:text-white">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                下單
              </button>
            )}
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Cart;
