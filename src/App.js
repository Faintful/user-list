import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [dataState, setData] = useState(null);

  const submitHandler = (data) => {
    setData(data);
  };

  return (
    <div>
      <Form onSubmit={submitHandler} />
    </div>
  );
}

export default App;
