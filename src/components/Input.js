import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ tag }, ref) => {
  return (
    <p className=''>
      <label htmlFor={tag}>
        {tag}
        <input ref={ref} id={tag} />
      </label>
    </p>
  );
});

export default Input;
