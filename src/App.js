import React, { useState } from 'react';
import './style.css';
const App = () => {
  const [count, SetCount] = useState(0);
  const UpdateCount = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Count:{count}</p>
      <button onClick={UpdateCount}>Increment By One</button>
    </div>
  );
};

export default App;
