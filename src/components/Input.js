import './Input.css';

export default function Input({ tag }) {
  return (
    <div className=''>
      <label htmlFor={tag}>
        <input id={tag}>{tag}</input>
      </label>
    </div>
  );
}
