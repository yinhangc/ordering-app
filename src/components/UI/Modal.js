import ReactDOM from 'react-dom';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Backdrop = (props) => {
  const { setShowCart } = useContext(CartContext);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-30 bg-zinc-900 opacity-80"
      onClick={() => setShowCart(false)}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`fixed z-40 w-10/12 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-8 py-5 bg-white rounded-xl ${
        props.className ?? ''
      }`}
    >
      {props.content}
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('modal'))}
      {ReactDOM.createPortal(
        <ModalOverlay
          content={props.children}
          className={props.className ?? null}
        />,
        document.getElementById('modal')
      )}
    </div>
  );
};

export default Modal;
