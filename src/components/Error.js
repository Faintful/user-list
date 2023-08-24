import React from 'react';
import './Error.css';

export default function Error({ type, onCancel: cancelHandler }) {
  return (
    <>
      <div onClick={cancelHandler} className='backdrop' />
      <div className='error'>
        <div>
          <h2>{type.cause}</h2>
          <h1>{type.message}</h1>
        </div>
        <button onClick={cancelHandler}>Okay</button>
      </div>
    </>
  );
}
