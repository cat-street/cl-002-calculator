import React, { useState } from 'react';
import { Screen } from './Screen';
import { Keyboard } from './Keyboard';
import { Top } from './Top';
import { calculation } from '../logic/calculation';
import 'normalize.css';
import './App.css';

function App() {
  const [state, setState] = useState({
    screenValue: '',
    operator: '',
    memValue: '',
    tempValue: '',
    lastClicked: '',
    negate: false
  });

  const handleChange = (value) => {
    calculation(value, state, setState);
  };

  return (
    <div className="calculator">
      <Top />
      <Screen value={state.screenValue || '0'} />
      <Keyboard handleChange={handleChange} />
    </div>
  );
}

export default App;
