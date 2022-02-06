import CartContext from '../../store/cart-context';
import { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderButton = () => {
  const { setShowCart, totalItem } = useContext(CartContext);
  const [highlightBtn, setHighlightBtn] = useState(false);

  useEffect(() => {
    if (totalItem === 0) return;
    setHighlightBtn(true);
    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [totalItem]);

  return (
    <button
      className={`flex gap-3 items-center py-2 px-5 sm:px-10 rounded-full bg-gray-800 ${
        highlightBtn ? 'animate-bump' : ''
      }`}
      onClick={() => setShowCart(true)}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>購物車</span>
      <span className="rounded-full w-6 h-6 bg-gray-500">{totalItem}</span>
    </button>
  );
};

export default HeaderButton;
