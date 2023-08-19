import { useState } from 'react';
import './Form.css';
import Input from './Input';

const initialState = {
  Name: '',
  Age: '',
};

export default function Form({ onSubmit, errorHandler }) {
  const [inputState, setInput] = useState(initialState);

  const onChangeHandler = ({ target: { id, value } }) => {
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    //validation
    if (inputState['Name'].length === 0 || inputState['Age'].length === 0) {
      errorHandler('blank');
      return;
    }

    if (inputState['Age'] < 0) {
      errorHandler('invalidAge');
      return;
    }

    onSubmit(inputState);
    setInput(initialState);
  };

  return (
    <form onSubmit={submitHandler} className=''>
      {['Name', 'Age'].map((element, index) => (
        <Input
          state={inputState}
          tag={element}
          key={index}
          onChange={onChangeHandler}
        />
      ))}
      <button type='submit'>Add User</button>
    </form>
  );
}
