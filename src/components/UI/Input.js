import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={props.input.id}>{props.label}:</label>
      <input
        className="rounded-md border-2 w-12 p-1"
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export default Input;
