import CartCard from './CartCard';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartList = () => {
  const { items } = useContext(CartContext);
  return (
    <ul className="grid gap-2">
      {items.map((meal) => (
        <CartCard key={meal.id} meal={meal} amount={meal.amount} />
      ))}
    </ul>
  );
};

export default CartList;
