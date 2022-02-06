import useInput from '../../hooks/use-input';
import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Input from '../UI/Input';
import Loader from '../UI/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
  faUser,
  faCheckCircle,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

const Checkout = (props) => {
  const { items } = useContext(CartContext);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    input: nameInput,
    validValue: nameIsValid,
    error: nameHasError,
    inputChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    input: addressInput,
    validValue: addressIsValid,
    error: addressHasError,
    inputChangeHandler: addressChangeHandler,
    onBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== '');

  const {
    input: phoneInput,
    validValue: phoneIsValid,
    error: phoneHasError,
    inputChangeHandler: phoneChangeHandler,
    onBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(
    (value) => value.trim() !== '' && value.match(/^[2-9][0-9]{7}$/)
  );

  let formIsValid =
    nameIsValid && addressIsValid && phoneIsValid ? true : false;

  const submitHandler = async (e) => {
    setSubmitting(true);
    try {
      e.preventDefault();
      if (!formIsValid) return;
      await fetch(
        'https://react-http-b067f-default-rtdb.firebaseio.com/orders.json/',
        {
          method: 'POST',
          body: JSON.stringify({
            user: {
              name: nameInput,
              phone: phoneInput,
              address: addressInput,
            },
            orderedItems: items,
          }),
        }
      );
      setSubmitted(true);
      resetName();
      resetPhone();
      resetAddress();
    } catch (err) {
      setError(true);
    }
    setSubmitting(false);
  };

  return (
    <>
      {!submitting && !submitted && !error ? (
        <>
          <h2 className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon icon={faInfoCircle} />
            請輸入個人資料
          </h2>
          <form
            className="grid gap-3 place-items-center"
            onSubmit={submitHandler}
          >
            <div>
              <Input
                label="姓名"
                input={{
                  id: 'name',
                  type: 'text',
                  size: 16,
                }}
                value={nameInput}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                error={nameHasError}
                errorMsg={'輸入的姓名無效'}
                icon={<FontAwesomeIcon icon={faUser} className="mr-2.5" />}
              />
            </div>
            <Input
              label="電話"
              input={{
                id: 'phone',
                type: 'text',
                size: 16,
              }}
              value={phoneInput}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              error={phoneHasError}
              errorMsg={'輸入的電話無效'}
              icon={<FontAwesomeIcon icon={faPhone} className="mr-2" />}
            />
            <Input
              label="地址"
              input={{
                id: 'address',
                type: 'text',
                size: 16,
              }}
              value={addressInput}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              error={addressHasError}
              errorMsg={'輸入的地址無效'}
              icon={<FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />}
            />
            <div className="flex gap-2 justify-self-end mt-1">
              <button
                type="button"
                className="flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-red-800 hover:text-white"
                onClick={() => props.setCheckout(false)}
              >
                <FontAwesomeIcon icon={faUndo} className="mr-2" />
                返回
              </button>
              <button
                type="submit"
                className={`flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-emerald-800 hover:text-white ${
                  !formIsValid &&
                  'disabled bg-gray-500 text-white hover:bg-gray-500 cursor-default'
                }`}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                提交資料
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="h-36 grid place-items-center">
          {submitting && !error && <Loader>提交中</Loader>}
          {submitted && !error && (
            <p className="text-center text-xl">
              資料已提交，稍後會有專人聯絡你，請耐心等候😄
            </p>
          )}
          {error && (
            <p className="text-center text-xl">抱歉，暫時未能提交資料。</p>
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
