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

export const buttons = {
  CLEAR: { id: 'clear', dataType: 'clear', value: 'C', children: 'C' },
  MRC: { id: 'mrc', dataType: 'memory', value: 'MRC', children: 'MRC' },
  MMINUS: { id: 'mminus', dataType: 'memory', value: 'MMINUS', children: 'M-' },
  MPLUS: { id: 'mplus', dataType: 'memory', value: 'MPLUS', children: 'M+' },
  NEGATE: {
    id: 'negate',
    dataType: 'advanced',
    value: 'NEGATE',
    children: '+/-',
  },
  PERCENT: {
    id: 'percent',
    dataType: 'advanced',
    value: 'PERCENT',
    children: '%',
  },
  SQUARE: {
    id: 'square',
    dataType: 'advanced',
    value: 'SQUARE',
    children: square,
  },
  BACKSPACE: {
    id: 'backspace',
    dataType: 'advanced',
    value: 'BACKSPACE',
    children: backspace,
  },
  SEVEN: { id: 'seven', dataType: 'number', value: 7, children: 7 },
  EIGHT: { id: 'eight', dataType: 'number', value: 8, children: 8 },
  NINE: { id: 'nine', dataType: 'number', value: 9, children: 9 },
  DIVIDE: {
    id: 'divide',
    dataType: 'operation',
    value: 'DIVIDE',
    children: '÷',
  },
  FOUR: { id: 'four', dataType: 'number', value: 4, children: 4 },
  FIVE: { id: 'five', dataType: 'number', value: 5, children: 5 },
  SIX: { id: 'six', dataType: 'number', value: 6, children: 6 },
  MULTIPLY: {
    id: 'multiply',
    dataType: 'operation',
    value: 'MULTIPLY',
    children: '×',
  },
  ONE: { id: 'one', dataType: 'number', value: 1, children: 1 },
  TWO: { id: 'two', dataType: 'number', value: 2, children: 2 },
  THREE: { id: 'three', dataType: 'number', value: 3, children: 3 },
  SUBTRACT: {
    id: 'subtract',
    dataType: 'operation',
    value: 'SUBTRACT',
    children: '-',
  },
  ZERO: { id: 'zero', dataType: 'number', value: 0, children: 0 },
  DECIMAL: { id: 'decimal', dataType: 'number', value: '.', children: '.' },
  EQUALS: { id: 'equals', dataType: 'equals', value: 'EQUALS', children: '=' },
  ADD: { id: 'add', dataType: 'operation', value: 'ADD', children: '+' },
};

export const dataTypes = {
  number: 'number',
  operation: 'operation',
  advanced: 'advanced',
  memory: 'memory',
  equals: 'equals',
  clear: 'clear',
};
