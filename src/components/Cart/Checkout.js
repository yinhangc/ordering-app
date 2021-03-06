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

  const submitHandler = async (e) => {
    setSubmitting(true);
    try {
      e.preventDefault();
      if (!nameIsValid || !addressIsValid || !phoneIsValid) return;
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
            ?????????????????????
          </h2>
          <form
            className="grid gap-3 place-items-center"
            onSubmit={submitHandler}
          >
            <div>
              <Input
                label="??????"
                input={{
                  id: 'name',
                  type: 'text',
                  size: 16,
                }}
                value={nameInput}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                error={nameHasError}
                errorMsg={'?????????????????????'}
                icon={<FontAwesomeIcon icon={faUser} className="mr-2.5" />}
              />
            </div>
            <Input
              label="??????"
              input={{
                id: 'phone',
                type: 'text',
                size: 16,
              }}
              value={phoneInput}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              error={phoneHasError}
              errorMsg={'?????????????????????'}
              icon={<FontAwesomeIcon icon={faPhone} className="mr-2" />}
            />
            <Input
              label="??????"
              input={{
                id: 'address',
                type: 'text',
                size: 16,
              }}
              value={addressInput}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              error={addressHasError}
              errorMsg={'?????????????????????'}
              icon={<FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />}
            />
            <div className="flex gap-2 justify-self-end mt-1">
              <button
                type="button"
                className="flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg hover:bg-red-800 hover:text-white"
                onClick={() => props.setCheckout(false)}
              >
                <FontAwesomeIcon icon={faUndo} className="mr-2" />
                ??????
              </button>
              <button
                type="submit"
                disabled={!nameIsValid || !addressIsValid || !phoneIsValid}
                className={`flex items-center justify-center font-bold border-2 py-2 px-6 rounded-lg ${
                  !nameIsValid || !addressIsValid || !phoneIsValid
                    ? ' bg-gray-500 text-white hover:bg-gray-500 cursor-default'
                    : 'hover:bg-emerald-800 hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                ????????????
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="h-36 grid place-items-center">
          {submitting && !error && <Loader>?????????</Loader>}
          {submitted && !error && (
            <p className="text-center text-xl">
              ???????????????????????????????????????????????????????????????????
            </p>
          )}
          {error && (
            <p className="text-center text-xl">????????????????????????????????????</p>
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
