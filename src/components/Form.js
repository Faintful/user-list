import { useState } from 'react';
import './Form.css';
import Input from './Input';

const initialState = {
  Name: '',
  Age: '',
};

export default function Form({ onSubmit }) {
  const [inputState, setInput] = useState(initialState);

  const onChangeHandler = ({ target: { id, value } }) => {
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();
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
