import './Input.css';

export default function Input({ tag, onChange, state }) {
  return (
    <p className=''>
      <label htmlFor={tag}>
        {tag}
        <input value={state[tag]} onChange={onChange} id={tag} />
      </label>
    </p>
  );
}
