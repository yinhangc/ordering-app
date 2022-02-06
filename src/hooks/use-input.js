import { useState } from 'react';

const useInput = (validate) => {
  const [input, setInput] = useState('');
  const [touched, setTouched] = useState(false);
  const validValue = validate(input);
  const error = !validValue && touched;

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onBlurHandler = (e) => {
    setTouched(true);
  };

  const reset = () => {
    setInput('');
    setTouched(false);
  };

  return {
    input,
    validValue,
    error,
    inputChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
