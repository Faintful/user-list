import './Form.css';
import Input from './Input';

export default function Form() {
  return (
    <form className=''>
      {['Name', 'Age'].map((element, index) => (
        <Input tag={element} key={index} />
      ))}
    </form>
  );
}
