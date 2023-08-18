import './Result.css';

export default function Result({ userData }) {
  return (
    <div>
      {userData.map((data, index) => (
        <div className='' key={index}>
          <p>{data['Name']}</p>
          <p>{data['Age']}</p>
        </div>
      ))}
    </div>
  );
}
