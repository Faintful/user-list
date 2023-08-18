import './Input.css';

export default function Input({ label }) {
  return (
    <div className=''>
      <label htmlFor={label}>
        <input id={label}>{label}</input>
      </label>
    </div>
  );
}
