import React from 'react';
import './Keyboard.css';
import { buttons } from '../utils/constants'
import { Button } from './Button';

export function Keyboard({ setValue }) {
  const onClick = (dataType, value) => {
    if (dataType === 'number') {
      setValue(value);
    }
  }

  return (
    <div className="calculator__keyboard">
      {buttons.map((el) => (
        <Button
          key={el.id}
          id={el.id}
          dataType={el.dataType}
          value={el.value}
          children={el.children}
          onClick={onClick.bind(null, el.dataType, el.value)}
        />
      ))}
    </div>
  );
}
