import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [userDataState, setUserData] = useState([]);

  const submitHandler = (data) => {
    setUserData((prevState) => [...prevState, data]);
  };

  return (
    <div>
      <Form onSubmit={submitHandler} />
      {userDataState.length > 0 ? (
        <Result userData={userDataState} />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
