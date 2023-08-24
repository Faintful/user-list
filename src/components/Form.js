import { useState, useRef } from 'react';
import './Form.css';
import Input from './Input';
import Error from './Error';
import ReactDOM from 'react-dom';

export default function Form({ onSubmit }) {
  const [errorState, setError] = useState(null);

  const refs = {
    Name: useRef(''),
    Age: useRef(''),
  };

  const cancelHandler = () => {
    setError(null);
  };

  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    //validation
    if (
      refs.Name.current.value.length === 0 ||
      refs.Age.current.value.length === 0
    ) {
      setError({
        cause: 'Empty fields',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (refs.Age.current.value < 0 || isNaN(refs.Age.current.value)) {
      setError({
        cause: 'Invalid Number',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }

    onSubmit({ Name: refs.Name.current.value, Age: refs.Age.current.value });
    refs.Name.current.value = '';
    refs.Age.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className=''>
      {errorState !== null &&
        ReactDOM.createPortal(
          <Error type={errorState} onCancel={cancelHandler} />,
          document.getElementById('error-modal')
        )}
      {['Name', 'Age'].map((element, index) => (
        <Input tag={element} key={index} ref={refs[element]} />
      ))}
      <button type='submit'>Add User</button>
    </form>
  );
}
