import React, { useEffect } from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="grid grid-cols-[max-content,1fr] items-center gap-x-3 gap-y-1">
      <label htmlFor={props.input.id}>
        {props.icon}
        {props.label}
      </label>
      <input
        className={`rounded-md border-2 p-1 ${
          props.input.type === 'number' && 'w-11'
        }`}
        {...props.input}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        ref={ref}
      />
      {props.error && (
        <p className="col-start-2 text-red-600">{props.errorMsg}</p>
      )}
    </div>
  );
});
export default Input;
