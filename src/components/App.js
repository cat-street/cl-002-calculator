import React, { useState } from 'react';
import { Screen } from './Screen';
import { Keyboard } from './Keyboard';
import { Top } from './Top';
import 'normalize.css';
import './App.css';

function App() {
  const [screen, setScreen] = useState(0);

  const handleChange = (value) => {
    setScreen(value);
  }

  return (
    <div className="calculator">
      <Top />
      <Screen value={screen} />
      <Keyboard setValue={handleChange} />
    </div>
  );
}

export default App;
