import Input from '../UI/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';

const MealForm = (props) => {
  const amountInputRef = useRef();
  const { addItem } = useContext(CartContext);
  const [validInput, setValidInput] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const amountInput = amountInputRef.current.value;
    if (amountInput.trim().length === 0 || typeof +amountInput !== 'number') {
      setValidInput(false);
      return;
    }
    if (!validInput) setValidInput(true);
    addItem({ ...props.meal, amount: +amountInput });
  };

  return (
    <form className="flex justify-between">
      <div>
        <Input
          ref={amountInputRef}
          label="數量"
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1',
          }}
        />
        {!validInput && (
          <p className="text-red-500 mt-1">輸入無效，請重新輸入。</p>
        )}
      </div>

      <button
        className="rounded-lg py-2 px-4 bg-gray-500 text-white"
        onClick={submitHandler}
      >
        <FontAwesomeIcon icon={faCartPlus} className="mr-1.5" />
        加至購物車
      </button>
    </form>
  );
};

export default MealForm;
