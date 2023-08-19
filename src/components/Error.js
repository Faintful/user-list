import './Error.css';

function errorSwitch(error) {
  switch (error) {
    case 'blank':
      return <p>Please enter a valid name and age (non-empty values) </p>;
    case 'invalidAge':
      return <p>Please enter a valid age (&gt; 0)</p>;
    default:
      return <p></p>;
  }
}

export default function Error({ errorType, cancelHandler }) {
  return (
    <div className='error'>
      <div>
        <h2>Invalid input</h2>
        {errorSwitch(errorType)}
      </div>
      <button onClick={cancelHandler}>Okay</button>
    </div>
  );
}
