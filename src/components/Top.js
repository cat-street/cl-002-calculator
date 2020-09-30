import React from 'react';
import './Top.css';

export function Top(props) {
  return (
    <div className="calculator__top">
      <div className="calculator__heading">
        <h1 className="calculator__title">CATLOGIC</h1>
        <h2 className="calculator__subtitle">CL-001</h2>
      </div>
      <div className="calculator__sun-battery-container">
        <div className="calculator__sun-battery"></div>
      </div>
    </div>
  );
}
