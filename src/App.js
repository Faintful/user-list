import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Error from './components/Error';

function App() {
  const [userDataState, setUserData] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [errorType, setErrorType] = useState(null);

  const errorHandler = (error) => {
    setErrorState(true);
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

  const cancelHandler = () => {
    setErrorState(false);
  };

  return (
    <div>
      <div
        onClick={cancelHandler}
        style={!errorState ? {} : { backgroundColor: '#00000080' }}
      >
        <Form errorHandler={errorHandler} onSubmit={submitHandler} />
        {userDataState.length > 0 ? (
          <Result userData={userDataState} />
        ) : (
          <p>No data</p>
        )}
      </div>
      {!errorState ? null : (
        <Error cancelHandler={cancelHandler} errorType={errorType} />
      )}
    </div>
  );
}

export default App;
