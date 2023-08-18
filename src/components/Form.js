import { useState } from 'react';
import './Form.css';
import Input from './Input';

const initialState = {
  name: '',
  age: 0,
};

export default function Form() {
  const [inputState, setInput] = useState(initialState);

  const onChangeHandler = ({ target: { id, value } }) => {
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <form className=''>
      {['Name', 'Age'].map((element, index) => (
        <Input tag={element} key={index} onChange={onChangeHandler} />
      ))}
    </form>
  );
}
