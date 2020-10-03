import Big from 'big.js';

export function operation(firstValue, operation, secondValue) {
  /** TODO: Handle big numbers */
  const first = Big(firstValue);
  const second = Big(secondValue);

  if (operation === 'ADD') {
    return first.plus(second).toString();
  }
  if (operation === 'SUBTRACT') {
    return first.minus(second).toString();
  }
  if (operation === 'MULTIPLY') {
    return first.times(second).toString();
  }
  if (operation === 'DIVIDE') {
    /** Forbid dividing by zero */
    if (secondValue === '0') {
      return 'Error';
    }
    return first.div(second).toString();
  }
}

export function advanced(screenValue, operation){
  const value = Big(screenValue);

  if (operation === 'NEGATE') {
    return (-value).toString();
  }
  if (operation === 'PERCENT') {
    return (value * 0.01).toString();
  }
  /** Forbid square root for negative numbers */
  if (operation === 'SQUARE') {
    if (value < 0) {
      return 'Error';
    }
    return value.sqrt().toString();
  }
  if (operation === 'BACKSPACE') {
    if (screenValue.length > 1) {
      return value.toString().slice(0, -1);
    } else return '0';
  }
}
