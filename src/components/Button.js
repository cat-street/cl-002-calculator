import React from 'react';
import './Button.css';

export function Button({ id, dataType, value, children, onClick }) {
  return (
    <button
      id={id}
      type="button"
      data-type={dataType}
      className={`button button_type_${dataType}`}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
