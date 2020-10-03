import React from 'react';
import './Screen.css';

/** TODO: Screen limit */
export function Screen({ value }) {
  return (
    <div className="calculator__screen-container">
      <p className="calculator__screen-mem">M</p>
      <input
        id="display"
        type="text"
        className="calculator__screen"
        name="screen"
        value={value}
        maxLength="10"
        disabled
      />
    </div>
  );
}
