import './Input.css';

export default function Input({ tag, onChange }) {
  return (
    <p className=''>
      <label htmlFor={tag.toLowerCase()}>
        {tag}
        <input onChange={onChange} id={tag.toLowerCase()} />
      </label>
    </p>
  );
}
