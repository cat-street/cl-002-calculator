import React from 'react';
import './Screen.css';

export function Screen({ value, mem }) {
  return (
    <div className="calculator__screen-container">
      <p className={`calculator__screen-mem ${(mem !=='0') && 'calculator__screen-mem_visible'}`}>M</p>
      <input
        id="display"
        type="text"
        className="calculator__screen"
        name="screen"
        value={value.slice(0, 10)}
        maxLength="10"
        disabled
      />
    </div>
  );
}
