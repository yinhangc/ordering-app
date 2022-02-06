import CartCard from './CartCard';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUndo,
  faCheckCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const CartList = (props) => {
  const { items, setShowCart, totalAmount } = useContext(CartContext);

  return (
    <>
      <h2 className="flex items-center gap-3">
        <FontAwesomeIcon icon={faShoppingCart} />
        你的購物車
      </h2>
      <ul className="grid gap-2">
        {items.map((meal) => (
          <CartCard key={meal.id} meal={meal} amount={meal.amount} />
        ))}
      </ul>
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
          <button
            onClick={() => props.setCheckout(true)}
            className="flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-emerald-800 hover:text-white"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            下單
          </button>
        )}
      </div>
    </>
  );
};

export default CartList;
