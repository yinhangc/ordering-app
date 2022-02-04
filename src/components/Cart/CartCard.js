import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartCard = (props) => {
  const { price, name, id } = props.meal;
  const { addItem, removeItem } = useContext(CartContext);

  const addHandler = (e) => {
    e.preventDefault();
    addItem({ ...props.meal, amount: 1 });
  };

  const removeHandler = (e) => {
    e.preventDefault();
    removeItem(id);
  };

  return (
    <li className="flex justify-between items-center border-b-2 py-4">
      <div>
        <h3 className="mb-1">{name}</h3>
        <div className="flex justify-between items-center w-20">
          <span className="font-bold">${price}</span>
          <span className="border-2 py-1 px-2 rounded-lg">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center font-bold w-8 h-8 border-2 p-2 rounded-lg hover:bg-gray-500 hover:text-white"
          onClick={removeHandler}
        >
          -
        </button>
        <button
          className="flex items-center justify-center font-bold w-8 h-8 border-2 p-2 rounded-lg hover:bg-gray-500 hover:text-white"
          onClick={addHandler}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartCard;
