import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Error from './components/Error';

function App() {
  const [userDataState, setUserData] = useState([]);
  const [errorState, setError] = useState(false);
  const [errorType, setErrorType] = useState(null);

  const errorHandler = (error) => {
    setError(true);
    switch (error) {
      case 'blank':
        setErrorType('blank');
        break;
      case 'invalidAge':
        setErrorType('invalidAge');
        break;
    }
  };

  const submitHandler = (data) => {
    setUserData((prevState) => [...prevState, data]);
  };

  return (
    <div>
      <Form errorHandler={errorHandler} onSubmit={submitHandler} />
      {userDataState.length > 0 ? (
        <Result userData={userDataState} />
      ) : (
        <p>No data</p>
      )}
      {!errorState ? null : <Error errorType={errorType} />}
    </div>
  );
}

export default App;
