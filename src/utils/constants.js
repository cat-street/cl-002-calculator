import React from 'react';

const square = (
  <svg
    className="square-symbol"
    viewBox="0 0 33 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 10l5 11h2.5l6-19H33" stroke="#fff" strokeWidth="3" />
  </svg>
);

const backspace = (
  <svg
    className="backspace-symbol"
    viewBox="0 0 27 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l-9 9 9 9M3 11h24" stroke="#fff" strokeWidth="3" />
  </svg>
);

export const buttons = [
  { id: 'clear', dataType: 'reset', value: 'C', children: 'C' },
  { id: 'mrc', dataType: 'memory', value: 'MRC', children: 'MRC' },
  { id: 'mminus', dataType: 'memory', value: 'MMINUS', children: 'M-' },
  { id: 'mplus', dataType: 'memory', value: 'MPLUS', children: 'M+' },
  { id: 'negate', dataType: 'advanced', value: 'NEGATE', children: '+/-' },
  { id: 'percent', dataType: 'advanced', value: 'PERCENT', children: '%' },
  {
    id: 'square',
    dataType: 'advanced',
    value: 'SQUARE',
    children: square,
  },
  {
    id: 'backspace',
    dataType: 'advanced',
    value: 'BACKSPACE',
    children: backspace,
  },
  { id: 'seven', dataType: 'number', value: 7, children: 7 },
  { id: 'eight', dataType: 'number', value: 8, children: 8 },
  { id: 'nine', dataType: 'number', value: 9, children: 9 },
  { id: 'divide', dataType: 'operation', value: 'DIVIDE', children: '÷' },
  { id: 'four', dataType: 'number', value: 4, children: 4 },
  { id: 'five', dataType: 'number', value: 5, children: 5 },
  { id: 'six', dataType: 'number', value: 6, children: 6 },
  { id: 'multiply', dataType: 'operation', value: 'MULTIPLY', children: '×' },
  { id: 'one', dataType: 'number', value: 1, children: 1 },
  { id: 'two', dataType: 'number', value: 2, children: 2 },
  { id: 'three', dataType: 'number', value: 3, children: 3 },
  { id: 'minus', dataType: 'operation', value: 'SUBTRACT', children: '-' },
  { id: 'zero', dataType: 'number', value: 0, children: 0 },
  { id: 'decimal', dataType: 'number', value: 'DECIMAL', children: '.' },
  { id: 'equals', dataType: 'operation', value: 'EQUALS', children: '=' },
  { id: 'add', dataType: 'operation', value: 'ADD', children: '+' },
];
